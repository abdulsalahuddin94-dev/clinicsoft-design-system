// ⭐Navigation - working replicas of the ClinicSoft Figma components. Props use the Figma property and
// variant names exactly (spaces and case included) with the Figma defaults, so a developer reads the
// same names as in Figma. The State prop forces a Figma state for review; with State=Default the
// component reacts for real (hover, focus, press, select).
import React from 'react';
import { Icon } from '../lib/Icon';
import { Avatar, Badge } from './DataDisplay';
import { Search } from './FormElements';

type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
const iconSize: Record<Size, number> = { xs: 16, sm: 16, base: 20, lg: 20, xl: 24 };
const labelStyle: Record<Size, string> = { xs: 'ts-xs-semi-bold', sm: 'ts-sm-semi-bold', base: 'ts-sm-semi-bold', lg: 'ts-base-semi-bold', xl: 'ts-lg-semi-bold' };

// ---------- Button (Atom) ----------
export type ButtonProps = {
  Type?: 'Filled' | 'Pill' | 'Outline' | 'Link' | 'Danger';
  Size?: Size;
  State?: 'Default' | 'Hover' | 'Pressed' | 'Focus' | 'Disabled' | 'Loading';
  Label?: string;
  'Show Leading Icon'?: boolean;
  'Show Trailing Icon'?: boolean;
  'Leading Icon'?: string;
  'Trailing Icon'?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};
export function Button({
  Type = 'Filled', Size = 'xs', State = 'Default', Label = 'Button',
  'Show Leading Icon': showLeading = false, 'Show Trailing Icon': showTrailing = false,
  'Leading Icon': leading = 'Icon/Add', 'Trailing Icon': trailing = 'Icon/Arrow Right', onClick, type = 'button',
}: ButtonProps) {
  const s = iconSize[Size];
  const loading = State === 'Loading';
  return (
    <button
      type={type}
      className={`btn ${labelStyle[Size]}`}
      data-type={Type} data-size={Size} data-state={State}
      disabled={State === 'Disabled'} aria-busy={loading || undefined}
      onClick={loading ? undefined : onClick}
    >
      {loading ? <Icon name="Loader" size={s} className="spin" /> : showLeading && <Icon name={leading} size={s} />}
      <span>{Label}</span>
      {showTrailing && <Icon name={trailing} size={s} />}
    </button>
  );
}

// ---------- Icon Button (Atom) ----------
export type IconButtonProps = {
  Type?: 'Filled' | 'Outline' | 'Ghost' | 'Danger';
  Size?: Size;
  State?: 'Default' | 'Hover' | 'Pressed' | 'Focus' | 'Disabled';
  Icon?: string;
  /** Accessible name (the Tooltip text in Figma). Required in code. */
  label?: string;
  onClick?: () => void;
  pressed?: boolean;
};
export function IconButton({ Type = 'Filled', Size = 'xs', State = 'Default', Icon: icon = 'Icon/Settings', label, onClick, pressed }: IconButtonProps) {
  const s = Size === 'lg' || Size === 'xl' ? 24 : Size === 'base' ? 20 : 16;
  return (
    <button
      type="button" className="icon-btn" data-type={Type} data-size={Size} data-state={State}
      disabled={State === 'Disabled'} aria-label={label ?? icon.replace('Icon/', '')} aria-pressed={pressed} title={label ?? icon.replace('Icon/', '')}
      onClick={onClick}
    >
      <Icon name={icon} size={s} />
    </button>
  );
}

// ---------- Tabs / Item (Atom), Tabs / Bar (Molecule) ----------
export type TabsItemProps = {
  Type?: 'Underline' | 'Segmented';
  State?: 'Default' | 'Hover' | 'Selected' | 'Focus' | 'Disabled';
  Label?: string;
  'Show Icon'?: boolean;
  Icon?: string;
  onClick?: () => void;
  /** set by Tabs / Bar: the item is a role="tab" inside a tablist */
  inBar?: boolean;
};
export function TabsItem({ Type = 'Underline', State = 'Default', Label = 'Appointments', 'Show Icon': showIcon = false, Icon: icon = 'Icon/Calendar', onClick, inBar = false }: TabsItemProps) {
  const selected = State === 'Selected';
  return (
    <button
      type="button" role={inBar ? 'tab' : undefined} aria-selected={inBar ? selected : undefined} aria-pressed={inBar ? undefined : selected} tabIndex={!inBar || selected || State === 'Focus' ? 0 : -1}
      className={`tab ${selected ? 'ts-sm-semi-bold' : 'ts-sm-medium'}`} data-type={Type} data-state={State}
      disabled={State === 'Disabled'} onClick={onClick}
    >
      {showIcon && <Icon name={icon} size={16} />}
      {Label}
    </button>
  );
}

const TAB_LABELS = { Underline: ['Overview', 'Visits', 'Prescriptions', 'Files'], Segmented: ['Day', 'Week', 'Month', 'List'] } as const;
export function TabsBar({ Type = 'Underline', showPanel = false }: { Type?: 'Underline' | 'Segmented'; showPanel?: boolean }) {
  const [active, setActive] = React.useState(0);
  const labels = TAB_LABELS[Type];
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') setActive((active + 1) % labels.length);
    if (e.key === 'ArrowLeft') setActive((active + labels.length - 1) % labels.length);
  };
  return (
    <div>
      <div className="tabs-bar" role="tablist" data-type={Type} onKeyDown={onKey}>
        {labels.map((l, i) => (
          <TabsItem key={l} inBar Type={Type} Label={l} State={i === active ? 'Selected' : 'Default'} onClick={() => setActive(i)} />
        ))}
      </div>
      {showPanel && <div className="tabs-panel ts-sm-regular" role="tabpanel">{labels[active]} content</div>}
    </div>
  );
}

// ---------- Pagination / Item (Atom), Pagination (Molecule) ----------
export type PaginationItemProps = { State?: 'Default' | 'Hover' | 'Current' | 'Focus' | 'Disabled'; Page?: string; onClick?: () => void };
export function PaginationItem({ State = 'Default', Page = '1', onClick }: PaginationItemProps) {
  return (
    <button
      type="button" className="page-item ts-sm-medium" data-state={State} disabled={State === 'Disabled'}
      aria-current={State === 'Current' ? 'page' : undefined} aria-label={`Page ${Page}`} onClick={onClick}
    >
      {Page}
    </button>
  );
}

export function Pagination({ 'Show Summary': showSummary = true, Summary, pages = 12 }: { 'Show Summary'?: boolean; Summary?: string; pages?: number }) {
  const [page, setPage] = React.useState(2);
  const shown = Array.from({ length: Math.min(5, pages) }, (_, i) => Math.min(Math.max(page - 2, 1), Math.max(pages - 4, 1)) + i);
  // The Figma default summary follows the current page; any other Summary text is shown as typed.
  const live = `Showing ${(page - 1) * 10 + 1}-${Math.min(page * 10, 118)} of 118 patients`;
  const summary = !Summary || Summary === 'Showing 11-20 of 118 patients' ? live : Summary;
  return (
    <nav className="pagination" aria-label="Pagination">
      <IconButton Type="Ghost" Size="base" Icon="Icon/Chevron Left" label="Previous page" State={page === 1 ? 'Disabled' : 'Default'} onClick={() => setPage(page - 1)} />
      {shown.map((p) => <PaginationItem key={p} Page={String(p)} State={p === page ? 'Current' : 'Default'} onClick={() => setPage(p)} />)}
      <IconButton Type="Ghost" Size="base" Icon="Icon/Chevron Right" label="Next page" State={page === pages ? 'Disabled' : 'Default'} onClick={() => setPage(page + 1)} />
      {showSummary && <span className="pagination__summary ts-sm-regular">{summary}</span>}
    </nav>
  );
}

// ---------- Breadcrumb / Item (Atom), Breadcrumb (Molecule) ----------
export type BreadcrumbItemProps = { State?: 'Default' | 'Hover' | 'Current' | 'Focus' | 'Disabled'; Label?: string; 'Show Separator'?: boolean; onClick?: () => void; inList?: boolean };
export function BreadcrumbItem({ State = 'Default', Label = 'Patients', 'Show Separator': sep = true, onClick, inList = false }: BreadcrumbItemProps) {
  const current = State === 'Current';
  const Tag = inList ? 'li' : 'span';
  return (
    <Tag className="crumb" data-state={State}>
      <button type="button" className={`crumb__link ${current ? 'ts-sm-semi-bold' : 'ts-sm-medium'}`} aria-current={current ? 'page' : undefined} disabled={State === 'Disabled'} onClick={current ? undefined : onClick}>
        {Label}
      </button>
      {sep && <Icon name="Chevron Right" size={16} />}
    </Tag>
  );
}

export function Breadcrumb() {
  const all = ['Patients', 'Amira Saleh', 'Visit 12 Mar'];
  const [depth, setDepth] = React.useState(all.length);
  const path = all.slice(0, depth);
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb">
        {path.map((l, i) => (
          <BreadcrumbItem key={l} inList Label={l} State={i === path.length - 1 ? 'Current' : 'Default'} {...{ 'Show Separator': i < path.length - 1 }} onClick={() => setDepth(i + 1)} />
        ))}
      </ol>
      {depth < all.length && <button type="button" className="btn ts-xs-semi-bold" data-type="Link" data-size="xs" data-state="Default" onClick={() => setDepth(all.length)}>Reset path</button>}
    </nav>
  );
}

// ---------- Menu / Item (Atom), Menu (Molecule) ----------
export type MenuItemProps = {
  Type?: 'Default' | 'Danger';
  State?: 'Default' | 'Hover' | 'Selected' | 'Focus' | 'Disabled';
  Label?: string;
  'Show Leading Icon'?: boolean;
  'Leading Icon'?: string;
  onClick?: () => void;
  /** 'menuitem' inside Menu, 'option' inside Select / Dropdown; none when shown alone */
  role?: 'menuitem' | 'option';
};
export function MenuItem({ Type = 'Default', State = 'Default', Label = 'Edit appointment', 'Show Leading Icon': showIcon = true, 'Leading Icon': icon = 'Icon/Edit', onClick, role }: MenuItemProps) {
  const selected = State === 'Selected';
  return (
    <button
      type="button" role={role} aria-selected={role === 'option' ? selected : undefined}
      className={`menu-item ${selected ? 'ts-sm-semi-bold' : 'ts-sm-regular'}`} data-type={Type} data-state={State}
      disabled={State === 'Disabled'} onClick={onClick}
    >
      {showIcon && <Icon name={icon} size={16} />}
      <span className="menu-item__label">{Label}</span>
      {selected && <Icon name="Check" size={16} className="menu-item__check" />}
    </button>
  );
}

export const MENU_ITEMS = [
  { Label: 'Edit appointment', icon: 'Icon/Edit' },
  { Label: 'Reschedule', icon: 'Icon/Calendar' },
  { Label: 'Send reminder', icon: 'Icon/Bell' },
] as const;
export function Menu({ onAction }: { onAction?: (label: string) => void }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const onKey = (e: React.KeyboardEvent) => {
    const items = Array.from(ref.current?.querySelectorAll<HTMLButtonElement>('.menu-item:not(:disabled)') ?? []);
    const i = items.indexOf(document.activeElement as HTMLButtonElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length]?.focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length]?.focus(); }
  };
  return (
    <div className="menu" role="menu" ref={ref} onKeyDown={onKey}>
      {MENU_ITEMS.map((m) => <MenuItem key={m.Label} role="menuitem" Label={m.Label} {...{ 'Leading Icon': m.icon }} onClick={() => onAction?.(m.Label)} />)}
      <hr className="menu__divider" />
      <MenuItem role="menuitem" Type="Danger" Label="Cancel appointment" {...{ 'Leading Icon': 'Icon/Delete' }} onClick={() => onAction?.('Cancel appointment')} />
    </div>
  );
}

/** In use: a row-actions Icon Button that opens the Menu; Escape or a click outside closes it. */
export function MenuInUse() {
  const [open, setOpen] = React.useState(false);
  const [last, setLast] = React.useState<string>();
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', close); document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, [open]);
  return (
    <div className="sb-col">
      <div className="menu-anchor" ref={ref}>
        <IconButton Type="Ghost" Size="base" Icon="Icon/More Horizontal" label="Row actions" pressed={open} onClick={() => setOpen(!open)} />
        {open && <Menu onAction={(l) => { setLast(l); setOpen(false); }} />}
      </div>
      <span className="sb-note ts-xs-regular">{last ? `Chose: ${last}` : 'Open the row actions and choose an item.'}</span>
    </div>
  );
}

// ---------- Sidebar / Item (Molecule), Sidebar (Organism) ----------
export type SidebarItemProps = {
  State?: 'Default' | 'Hover' | 'Selected' | 'Focus' | 'Disabled';
  Label?: string;
  Icon?: string;
  'Show Count'?: boolean;
  count?: string;
  onClick?: () => void;
};
export function SidebarItem({ State = 'Default', Label = 'Appointments', Icon: icon = 'Icon/Calendar', 'Show Count': showCount = false, count = '12', onClick }: SidebarItemProps) {
  const selected = State === 'Selected';
  return (
    <button
      type="button" className={`nav-item ${selected ? 'ts-sm-semi-bold' : 'ts-sm-medium'}`} data-state={State}
      aria-current={selected ? 'page' : undefined} disabled={State === 'Disabled'} onClick={onClick}
    >
      <Icon name={icon} size={20} />
      <span className="nav-item__label">{Label}</span>
      {showCount && <Badge Status="Info" Size="sm" Label={count} />}
    </button>
  );
}

const NAV = [
  { Label: 'Dashboard', icon: 'Icon/Home' },
  { Label: 'Appointments', icon: 'Icon/Calendar' },
  { Label: 'Patients', icon: 'Icon/Users' },
  { Label: 'Prescriptions', icon: 'Icon/Pill' },
  { Label: 'Lab Results', icon: 'Icon/File Text', count: '12' },
  { Label: 'Messages', icon: 'Icon/Mail' },
];
const NAV_FOOTER = [{ Label: 'Settings', icon: 'Icon/Settings' }, { Label: 'Log Out', icon: 'Icon/Log Out' }];
export function Sidebar({ selected: initial = 'Appointments', onNavigate }: { selected?: string; onNavigate?: (label: string) => void }) {
  const [selected, setSelected] = React.useState(initial);
  const go = (l: string) => { setSelected(l); onNavigate?.(l); };
  const item = (n: { Label: string; icon: string; count?: string }) => (
    <li key={n.Label}>
      <SidebarItem Label={n.Label} Icon={n.icon} {...{ 'Show Count': !!n.count }} count={n.count} State={selected === n.Label ? 'Selected' : 'Default'} onClick={() => go(n.Label)} />
    </li>
  );
  return (
    <nav className="sidebar" aria-label="Main">
      <div className="sidebar__brand"><Icon name="Heart Pulse" size={24} /><span className="ts-lg-bold">ClinicSoft</span></div>
      <ul className="sidebar__list">{NAV.map(item)}</ul>
      <div className="sidebar__spacer" />
      <ul className="sidebar__list">{NAV_FOOTER.map(item)}</ul>
    </nav>
  );
}

// ---------- Top Bar (Organism) ----------
export function TopBar({ 'Page Title': title = 'Appointments', 'Show Primary Action': showAction = true, 'Show Search': showSearch = true, onPrimaryAction }: { 'Page Title'?: string; 'Show Primary Action'?: boolean; 'Show Search'?: boolean; onPrimaryAction?: () => void }) {
  return (
    <header className="top-bar">
      <h1 className="top-bar__title ts-xl-semi-bold">{title}</h1>
      {showSearch && <Search label="Search everything" />}
      <IconButton Type="Ghost" Size="base" Icon="Icon/Bell" label="Notifications" />
      {showAction && <Button Type="Filled" Size="base" Label="New appointment" {...{ 'Show Leading Icon': true, 'Leading Icon': 'Icon/Add' }} onClick={onPrimaryAction} />}
      <Avatar Type="Initials" Size="40" Initials="DK" />
    </header>
  );
}
