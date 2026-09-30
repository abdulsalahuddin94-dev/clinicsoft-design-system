// ⭐Data Display - working replicas of the ClinicSoft Figma components. Props use the Figma property
// and variant names exactly, with the Figma defaults.
import React from 'react';
import { Icon } from '../lib/Icon';
import { Button, IconButton } from './Navigation';
import { InputDate, SelectDropdown } from './FormElements';

type Status = 'Info' | 'Success' | 'Warning' | 'Error';
const statusIcon: Record<Status, string> = { Info: 'Info', Success: 'Check Circle', Warning: 'Warning', Error: 'Alert Circle' };

// ---------- Badge (Atom) ----------
export type BadgeProps = { Status?: Status | 'Neutral'; Size?: 'sm' | 'md'; Label?: string; 'Show Icon'?: boolean; Icon?: string };
export function Badge({ Status = 'Info', Size = 'sm', Label = 'Confirmed', 'Show Icon': showIcon = false, Icon: icon = 'Icon/Info' }: BadgeProps) {
  return (
    <span className={`badge ${Size === 'md' ? 'ts-sm-medium' : 'ts-xs-medium'}`} data-status={Status} data-size={Size}>
      {showIcon && <Icon name={icon} size={Size === 'md' ? 16 : 12} />}
      {Label}
    </span>
  );
}

// ---------- Avatar (Atom) ----------
const avatarText: Record<string, string> = { '24': 'ts-xs-semi-bold', '32': 'ts-xs-semi-bold', '40': 'ts-sm-semi-bold', '60': 'ts-xl-semi-bold', '100': 'ts-4xl-semi-bold' };
const avatarIcon: Record<string, number> = { '24': 16, '32': 16, '40': 20, '60': 24, '100': 24 };
export type AvatarProps = { Type?: 'Initials' | 'Icon'; Size?: '24' | '32' | '40' | '60' | '100'; Initials?: string; 'Show Status'?: boolean; name?: string };
export function Avatar({ Type = 'Initials', Size = '24', Initials = 'AS', 'Show Status': showStatus = false, name }: AvatarProps) {
  const px = `${Size}px`;
  return (
    <span className={`avatar ${avatarText[Size]}`} data-type={Type} style={{ width: px, height: px }} role="img" aria-label={name ?? (Type === 'Initials' ? Initials : 'User')}>
      {Type === 'Initials' ? Initials : <Icon name="User" size={avatarIcon[Size]} />}
      {showStatus && <span className="avatar__status" aria-label="Online" />}
    </span>
  );
}

// ---------- Tooltip (Atom) ----------
export type TooltipProps = { Arrow?: 'Up' | 'Down' | 'Left' | 'Right'; Size?: 'Small' | 'Large'; Text?: string; Title?: string; id?: string };
export function Tooltip({ Arrow = 'Up', Size = 'Small', Text = 'Edit appointment', Title = 'Fasting required', id }: TooltipProps) {
  return (
    <div className="tooltip" data-arrow={Arrow} data-size={Size} role="tooltip" id={id}>
      <span className="tooltip__arrow" />
      <div className="tooltip__body">
        {Size === 'Large' && <span className="ts-sm-semi-bold">{Title}</span>}
        <span className={Size === 'Large' ? 'ts-sm-regular' : 'ts-xs-medium'}>{Text}</span>
      </div>
    </div>
  );
}

/** In use: the Tooltip names an Icon Button on hover and keyboard focus. */
export function TooltipInUse() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="sb-row" style={{ paddingBottom: 'var(--space-12)' }}>
      <span className="tooltip-anchor" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} aria-describedby="tt-edit">
        <IconButton Type="Outline" Size="base" Icon="Icon/Edit" label="Edit appointment" />
        {open && <Tooltip id="tt-edit" Arrow="Up" Size="Small" Text="Edit appointment" />}
      </span>
      <span className="sb-note ts-xs-regular">Hover or tab to the button.</span>
    </div>
  );
}

// ---------- Alert (Molecule) ----------
export type AlertProps = { Status?: Status; Title?: string; Message?: string; 'Show Action'?: boolean; 'Show Close'?: boolean; actionLabel?: string; onClose?: () => void };
export function Alert(p: AlertProps) {
  const { Status = 'Info', Title = 'New lab results are available', Message = 'Two results were added to the patient record.', 'Show Action': showAction = false, 'Show Close': showClose = true } = p;
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => setOpen(true), [Status, Title, Message, showAction, showClose]);
  if (!open) return <Button Type="Link" Size="sm" Label="Show the alert again" onClick={() => setOpen(true)} />;
  return (
    <div className="alert" data-status={Status} role={Status === 'Error' || Status === 'Warning' ? 'alert' : 'status'}>
      <Icon name={statusIcon[Status]} size={20} />
      <div className="alert__content">
        <span className="status-title ts-sm-semi-bold">{Title}</span>
        <span className="alert__message ts-sm-regular">{Message}</span>
        {showAction && <Button Type="Link" Size="sm" Label={p.actionLabel ?? 'View results'} />}
      </div>
      {showClose && <IconButton Type="Ghost" Size="xs" Icon="Icon/Close" label="Dismiss" onClick={() => { setOpen(false); p.onClose?.(); }} />}
    </div>
  );
}

// ---------- Toast (Molecule) ----------
export type ToastProps = { Status?: Status; Title?: string; Message?: string; 'Show Action'?: boolean; 'Show Close'?: boolean; onClose?: () => void; onAction?: () => void };
export function Toast(p: ToastProps) {
  const { Status = 'Info', Title = 'Appointment confirmed', Message = 'A confirmation was sent to the patient by SMS.', 'Show Action': showAction = false, 'Show Close': showClose = true } = p;
  return (
    <div className="toast" data-status={Status} role="status" aria-live="polite">
      <Icon name={statusIcon[Status]} size={20} />
      <div className="toast__content">
        <span className="toast__title ts-sm-semi-bold">{Title}</span>
        <span className="toast__message ts-sm-regular">{Message}</span>
        {showAction && <Button Type="Link" Size="sm" Label="Undo" onClick={p.onAction} />}
      </div>
      {showClose && <IconButton Type="Ghost" Size="xs" Icon="Icon/Close" label="Dismiss" onClick={p.onClose} />}
    </div>
  );
}

/** In use: buttons that raise Toasts; each closes by itself after 5 s or with Close. */
export function ToastInUse() {
  const [list, setList] = React.useState<{ id: number; Status: Status; Title: string; Message: string; action?: boolean }[]>([]);
  const remove = (id: number) => setList((l) => l.filter((t) => t.id !== id));
  const push = (t: Omit<(typeof list)[number], 'id'>) => {
    const id = Date.now() + Math.random();
    setList((l) => [...l, { ...t, id }]);
    setTimeout(() => remove(id), 5000);
  };
  return (
    <div className="sb-row">
      <Button Type="Filled" Size="base" Label="Save appointment" onClick={() => push({ Status: 'Success', Title: 'Appointment saved', Message: 'Amira Saleh, 12 Mar at 10:30.' })} />
      <Button Type="Outline" Size="base" Label="Delete a file" onClick={() => push({ Status: 'Info', Title: 'File deleted', Message: 'blood-test-march.pdf was removed.', action: true })} />
      <Button Type="Danger" Size="base" Label="Fail an upload" onClick={() => push({ Status: 'Error', Title: 'Upload failed', Message: 'The file is larger than 10 MB.' })} />
      <div className="toast-region">
        {list.map((t) => <Toast key={t.id} Status={t.Status} Title={t.Title} Message={t.Message} {...{ 'Show Action': !!t.action }} onAction={() => remove(t.id)} onClose={() => remove(t.id)} />)}
      </div>
    </div>
  );
}

// ---------- Modal (Organism) ----------
export type ModalProps = { Type?: 'Default' | 'Danger'; Title?: string; Body?: string; 'Show Content'?: boolean; 'Show Close'?: boolean; onClose?: () => void; onConfirm?: () => void };
export function Modal(p: ModalProps) {
  const { Type = 'Default', Title = 'Reschedule appointment', Body = 'Choose a new date and time. The patient will get an SMS with the new details.', 'Show Content': showContent = true, 'Show Close': showClose = true } = p;
  const danger = Type === 'Danger';
  const titleId = React.useId();
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="modal__header">
        {danger && <span className="modal__warning"><Icon name="Warning" size={20} /></span>}
        <h2 className="modal__title ts-xl-semi-bold" id={titleId}>{Title}</h2>
        {showClose && <IconButton Type="Ghost" Size="sm" Icon="Icon/Close" label="Close" onClick={p.onClose} />}
      </div>
      <p className="modal__body ts-base-regular">{Body}</p>
      {showContent && !danger && (
        <div className="modal__content">
          <InputDate State="Filled" Label="New date" />
          <SelectDropdown State="Filled" Label="Time" Value="10:30" options={['09:00', '09:30', '10:00', '10:30', '11:00', '11:30']} />
        </div>
      )}
      <div className="modal__footer">
        <Button Type="Outline" Size="base" Label={danger ? 'Keep appointment' : 'Cancel'} onClick={p.onClose} />
        <Button Type={danger ? 'Danger' : 'Filled'} Size="base" Label={danger ? 'Cancel appointment' : 'Save changes'} onClick={p.onConfirm ?? p.onClose} />
      </div>
    </div>
  );
}

/** In use: opens over the scrim (color/bg/overlay); Escape, Close, Cancel or a scrim click closes; focus moves in and returns. */
export function ModalInUse() {
  const [open, setOpen] = React.useState<null | 'Default' | 'Danger'>(null);
  const [result, setResult] = React.useState<string>();
  const trigger = React.useRef<HTMLElement | null>(null);
  const dialog = React.useRef<HTMLDivElement>(null);
  const close = (r?: string) => { setOpen(null); if (r) setResult(r); trigger.current?.focus(); };
  React.useEffect(() => {
    if (!open) return;
    dialog.current?.querySelector<HTMLElement>('input, button')?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab' && dialog.current) {
        const f = Array.from(dialog.current.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled)'));
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, [open]);
  const openAs = (t: 'Default' | 'Danger') => (e?: unknown) => { trigger.current = document.activeElement as HTMLElement; setOpen(t); };
  return (
    <div className="sb-col">
      <div className="sb-row">
        <Button Type="Outline" Size="base" Label="Reschedule" onClick={openAs('Default')} />
        <Button Type="Danger" Size="base" Label="Cancel appointment" onClick={openAs('Danger')} />
      </div>
      <span className="sb-note ts-xs-regular">{result ?? 'Open a modal. Escape, Close or the scrim dismiss it.'}</span>
      {open && (
        <div className="scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div ref={dialog}>
            {open === 'Danger' ? (
              <Modal Type="Danger" Title="Cancel this appointment?" Body="Amira Saleh's visit on 12 Mar at 10:30 will be cancelled and the patient will be notified by SMS. This cannot be undone." onClose={() => close('Kept the appointment.')} onConfirm={() => close('Appointment cancelled.')} />
            ) : (
              <Modal onClose={() => close('Closed without saving.')} onConfirm={() => close('Changes saved.')} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
