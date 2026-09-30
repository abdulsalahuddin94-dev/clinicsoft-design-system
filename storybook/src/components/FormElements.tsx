// ⭐Form Elements - working replicas of the ClinicSoft Figma components. Props use the Figma property
// and variant names exactly, with the Figma defaults. Typing, checking, toggling, selecting, uploading
// and entering codes all work; the State prop forces a Figma state for review.
import React from 'react';
import { Icon } from '../lib/Icon';
import { Button, IconButton, MenuItem } from './Navigation';

// ---------- Checkbox (Atom) ----------
type ChoiceState = 'Default' | 'Hover' | 'Focus' | 'Error' | 'Disabled';
export type CheckboxProps = { Checked?: 'Unchecked' | 'Checked' | 'Indeterminate'; State?: ChoiceState; Label?: string; 'Show Label'?: boolean; onChange?: (v: 'Unchecked' | 'Checked') => void };
export function Checkbox({ Checked = 'Unchecked', State = 'Default', Label = 'Label', 'Show Label': showLabel = true, onChange }: CheckboxProps) {
  const [value, setValue] = React.useState(Checked);
  React.useEffect(() => setValue(Checked), [Checked]);
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = value === 'Indeterminate'; }, [value]);
  const on = value !== 'Unchecked';
  return (
    <label className="choice ts-sm-regular" data-state={State}>
      <input
        ref={ref} type="checkbox" checked={value === 'Checked'} disabled={State === 'Disabled'} aria-invalid={State === 'Error' || undefined}
        aria-label={showLabel ? undefined : Label}
        onChange={() => { const next = value === 'Checked' ? 'Unchecked' : 'Checked'; setValue(next); onChange?.(next); }}
      />
      <span className="checkbox__box" data-on={on}>{on && <Icon name={value === 'Indeterminate' ? 'Minus' : 'Check'} size={14} />}</span>
      {showLabel && Label}
    </label>
  );
}

// ---------- Radio (Atom) ----------
export type RadioProps = { Selected?: 'Off' | 'On'; State?: ChoiceState; Label?: string; 'Show Label'?: boolean; name?: string; onSelect?: () => void };
export function Radio({ Selected = 'Off', State = 'Default', Label = 'Label', 'Show Label': showLabel = true, name, onSelect }: RadioProps) {
  const [own, setOwn] = React.useState(Selected === 'On');
  React.useEffect(() => setOwn(Selected === 'On'), [Selected]);
  const on = onSelect ? Selected === 'On' : own;
  return (
    <label className="choice ts-sm-regular" data-state={State}>
      <input type="radio" name={name} checked={on} disabled={State === 'Disabled'} aria-invalid={State === 'Error' || undefined} aria-label={showLabel ? undefined : Label} onChange={() => (onSelect ? onSelect() : setOwn(true))} />
      <span className="radio__circle" data-on={on}>{on && <span className="radio__dot" />}</span>
      {showLabel && Label}
    </label>
  );
}

/** In use: a Radio group of 2 to 6 options (7 or more -> Select / Dropdown). Arrow keys move within the group. */
export function RadioGroup({ legend = 'Visit type', options = ['In person', 'Video call', 'Phone call'] }: { legend?: string; options?: string[] }) {
  const [value, setValue] = React.useState(options[0]);
  return (
    <fieldset className="radio-group">
      <legend className="ts-sm-medium">{legend}</legend>
      {options.map((o) => <Radio key={o} name={legend} Label={o} Selected={value === o ? 'On' : 'Off'} onSelect={() => setValue(o)} />)}
    </fieldset>
  );
}

// ---------- Toggle (Atom) ----------
export type ToggleProps = { Value?: 'Off' | 'On'; State?: 'Default' | 'Hover' | 'Focus' | 'Disabled'; Label?: string; 'Show Label'?: boolean };
export function Toggle({ Value = 'Off', State = 'Default', Label = 'Label', 'Show Label': showLabel = true }: ToggleProps) {
  const [on, setOn] = React.useState(Value === 'On');
  React.useEffect(() => setOn(Value === 'On'), [Value]);
  return (
    <label className="choice ts-sm-regular" data-state={State} data-toggle>
      <input type="checkbox" role="switch" checked={on} aria-checked={on} disabled={State === 'Disabled'} aria-label={showLabel ? undefined : Label} onChange={() => setOn(!on)} />
      <span className="toggle__track" data-on={on}><span className="toggle__knob" /></span>
      {showLabel && Label}
    </label>
  );
}

// ---------- OTP / Cell (Atom) ----------
export type OTPCellState = 'Default' | 'Focus' | 'Filled' | 'Error' | 'Disabled' | 'Hover' | 'Success';
export type OTPCellProps = { State?: OTPCellState; Digit?: string };
export function OTPCell({ State = 'Default', Digit = '4' }: OTPCellProps) {
  const [v, setV] = React.useState(State === 'Default' || State === 'Focus' ? '' : Digit);
  React.useEffect(() => setV(State === 'Default' || State === 'Focus' ? '' : Digit), [State, Digit]);
  return (
    <input
      className="otp-cell ts-2xl-semi-bold" data-state={State} value={v} maxLength={1} inputMode="numeric" aria-label="Digit"
      disabled={State === 'Disabled'} onChange={(e) => setV(e.target.value.replace(/\D/g, '').slice(-1))}
    />
  );
}

// ---------- Input / Text, Password, Date, Phone (Molecules) ----------
type InputState = 'Default' | 'Hover' | 'Focus' | 'Filled' | 'Error' | 'Success' | 'Disabled';
export type InputProps = {
  State?: InputState;
  Label?: string;
  'Show Optional'?: boolean;
  'Show Info'?: boolean;
  Hint?: string;
  'Show Hint'?: boolean;
  Message?: string;
  'Show Message'?: boolean;
  'Show Leading Icon'?: boolean;
  'Leading Icon'?: string;
  Placeholder?: string;
  Value?: string;
  'Error Message'?: string;
  'Success Message'?: string;
};
type Kind = 'Text' | 'Password' | 'Date' | 'Phone';
const DEFAULTS: Record<Kind, Required<Pick<InputProps, 'Label' | 'Placeholder' | 'Value' | 'Error Message' | 'Show Leading Icon' | 'Leading Icon'>>> = {
  Text: { Label: 'Full name', Placeholder: 'Patient full name', Value: 'Amira Saleh', 'Error Message': 'Enter the name as it appears on the ID', 'Show Leading Icon': false, 'Leading Icon': 'Icon/User' },
  Password: { Label: 'Password', Placeholder: 'Enter password', Value: '••••••••', 'Error Message': 'Use at least 8 characters with a number', 'Show Leading Icon': true, 'Leading Icon': 'Icon/Lock' },
  Date: { Label: 'Date of birth', Placeholder: 'DD/MM/YYYY', Value: '12/03/2026', 'Error Message': 'Enter a date in DD/MM/YYYY format', 'Show Leading Icon': false, 'Leading Icon': 'Icon/Calendar' },
  Phone: { Label: 'Phone number', Placeholder: '50 123 4567', Value: '50 123 4567', 'Error Message': 'Enter a valid mobile number', 'Show Leading Icon': true, 'Leading Icon': 'Icon/Phone' },
};
const showsValue = (s: InputState) => s === 'Filled' || s === 'Error' || s === 'Success' || s === 'Disabled';

function FieldLabel({ id, label, optional, info }: { id: string; label: string; optional: boolean; info: boolean }) {
  return (
    <div className="field__label-row">
      <label htmlFor={id} className="ts-sm-medium">{label}</label>
      {optional && <span className="field__optional ts-sm-regular">(Optional)</span>}
      {info && <span title="More information"><Icon name="Info" size={16} label="More information" /></span>}
    </div>
  );
}

function InputBase(p: InputProps & { kind: Kind }) {
  const d = DEFAULTS[p.kind];
  const State = p.State ?? 'Default';
  const Label = p.Label ?? d.Label;
  const id = React.useId();
  const msgId = `${id}-msg`;
  const initial = showsValue(State) ? (p.Value ?? d.Value) : '';
  const [value, setValue] = React.useState(initial);
  const [visible, setVisible] = React.useState(false);
  const [code, setCode] = React.useState('+971');
  const dateRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => setValue(initial), [initial]);
  const showLeading = p['Show Leading Icon'] ?? d['Show Leading Icon'];
  const message = State === 'Error' ? (p['Error Message'] ?? d['Error Message']) : State === 'Success' ? (p['Success Message'] ?? 'Looks good') : (p.Message ?? 'Helper text');
  const isPassword = p.kind === 'Password';
  const pickDate = () => { const el = dateRef.current; if (!el) return; try { el.showPicker(); } catch { el.focus(); } };
  return (
    <div className="field" data-state={State}>
      <FieldLabel id={id} label={Label} optional={p['Show Optional'] ?? false} info={p['Show Info'] ?? false} />
      {(p['Show Hint'] ?? false) && <span className="field__hint ts-xs-regular">{p.Hint ?? 'As written on the ID card'}</span>}
      <div className="control ts-sm-regular">
        {p.kind === 'Phone' && (
          <>
            <span className="phone__code">
              <select className="ts-sm-medium" aria-label="Country code" value={code} onChange={(e) => setCode(e.target.value)} disabled={State === 'Disabled'}>
                {['+971', '+966', '+20', '+965', '+974'].map((c) => <option key={c}>{c}</option>)}
              </select>
              <Icon name="Chevron Down" size={16} />
            </span>
            <span className="phone__divider" />
          </>
        )}
        {showLeading && <Icon name={p['Leading Icon'] ?? d['Leading Icon']} size={20} />}
        <input
          id={id} value={value} placeholder={p.Placeholder ?? d.Placeholder} disabled={State === 'Disabled'}
          type={isPassword && !visible ? 'password' : p.kind === 'Phone' ? 'tel' : 'text'}
          autoComplete={isPassword ? 'current-password' : p.kind === 'Phone' ? 'tel' : undefined}
          inputMode={p.kind === 'Date' ? 'numeric' : undefined}
          aria-invalid={State === 'Error' || undefined} aria-describedby={p['Show Message'] ? msgId : undefined}
          onChange={(e) => setValue(e.target.value)}
        />
        {State === 'Error' && <Icon name="Alert Circle" size={20} className="control__status-error" label="Error" />}
        {State === 'Success' && <Icon name="Check Circle" size={20} className="control__status-success" label="Valid" />}
        {isPassword && (
          <button type="button" className="control__icon-btn" aria-label={visible ? 'Hide password' : 'Show password'} aria-pressed={visible} onClick={() => setVisible(!visible)}>
            <Icon name={visible ? 'Eye Off' : 'Eye'} size={20} />
          </button>
        )}
        {p.kind === 'Date' && (
          <>
            <button type="button" className="control__icon-btn" aria-label="Choose date" onClick={pickDate} disabled={State === 'Disabled'}>
              <Icon name="Calendar" size={20} />
            </button>
            <input
              ref={dateRef} type="date" className="date__native" tabIndex={-1} aria-hidden
              onChange={(e) => { const [y, m, dd] = e.target.value.split('-'); if (y) setValue(`${dd}/${m}/${y}`); }}
            />
          </>
        )}
      </div>
      {(p['Show Message'] ?? false) && <span className="field__message ts-xs-regular" id={msgId}>{message}</span>}
    </div>
  );
}
export const InputText = (p: InputProps) => <InputBase {...p} kind="Text" />;
export const InputPassword = (p: InputProps) => <InputBase {...p} kind="Password" />;
export const InputDate = (p: Omit<InputProps, 'Show Leading Icon' | 'Leading Icon'>) => <InputBase {...p} kind="Date" />;
export const InputPhone = (p: InputProps) => <InputBase {...p} kind="Phone" />;

// ---------- Text Area (Molecule) ----------
export type TextAreaProps = {
  State?: InputState; Label?: string; 'Show Character Count'?: boolean; 'Show Message'?: boolean;
  Placeholder?: string; Value?: string; Message?: string; 'Error Message'?: string; 'Success Message'?: string; maxLength?: number;
};
export function TextArea(p: TextAreaProps) {
  const { State = 'Default', Label = 'Visit notes', maxLength = 500 } = p;
  const id = React.useId();
  const initial = showsValue(State) ? (p.Value ?? 'Patient reports mild headache for three days. No fever.') : '';
  const [value, setValue] = React.useState(initial);
  React.useEffect(() => setValue(initial), [initial]);
  const message = State === 'Error' ? (p['Error Message'] ?? 'Notes are required for this visit') : State === 'Success' ? (p['Success Message'] ?? 'Notes saved') : (p.Message ?? 'Visible to the care team');
  const showMsg = p['Show Message'] ?? true, showCount = p['Show Character Count'] ?? true;
  return (
    <div className="field field--area" data-state={State}>
      <label htmlFor={id} className="ts-sm-medium">{Label}</label>
      <div className="control control--area ts-sm-regular">
        <textarea id={id} value={value} maxLength={maxLength} placeholder={p.Placeholder ?? 'Write clinical notes…'} disabled={State === 'Disabled'} aria-invalid={State === 'Error' || undefined} onChange={(e) => setValue(e.target.value)} />
      </div>
      {(showMsg || showCount) && (
        <div className="field__message ts-xs-regular">
          <span>{showMsg ? message : ''}</span>
          {showCount && <span aria-live="polite" style={{ color: 'var(--color-text-muted)' }}>{value.length}/{maxLength}</span>}
        </div>
      )}
    </div>
  );
}

// ---------- Search (Molecule) ----------
export type SearchProps = { State?: 'Default' | 'Hover' | 'Focus' | 'Filled' | 'Disabled'; Placeholder?: string; onSearch?: (q: string) => void; label?: string };
export function Search({ State = 'Default', Placeholder = 'Search patients, doctors, files', onSearch, label }: SearchProps) {
  const initial = State === 'Filled' || State === 'Disabled' ? 'Amira Saleh' : '';
  const [q, setQ] = React.useState(initial);
  React.useEffect(() => setQ(initial), [initial]);
  const set = (v: string) => { setQ(v); onSearch?.(v); };
  return (
    <div className="search" data-state={State} role="search" aria-label={label}>
      <div className="control ts-sm-regular">
        <Icon name="Search" size={20} />
        <input aria-label={label ?? 'Search'} type="search" placeholder={Placeholder} value={q} disabled={State === 'Disabled'} onChange={(e) => set(e.target.value)} onKeyDown={(e) => { if (e.key === 'Escape') set(''); }} />
        {q && <button type="button" className="control__icon-btn" aria-label="Clear search" onClick={() => set('')}><Icon name="Close" size={16} /></button>}
      </div>
    </div>
  );
}

// ---------- Upload Field (Molecule) ----------
type UploadState = 'Default' | 'Hover' | 'Uploading' | 'Uploaded' | 'Error' | 'Focus' | 'Disabled';
export type UploadFieldProps = { State?: UploadState; Label?: string; 'Format Hint'?: string; 'Error Message'?: string; 'File Name'?: string };
export function UploadField(p: UploadFieldProps) {
  const { Label = 'Lab report', 'Format Hint': hint = 'PDF, JPG or PNG, up to 10 MB', 'Error Message': error = 'This file is larger than 10 MB' } = p;
  const forced = p.State ?? 'Default';
  const [state, setState] = React.useState<UploadState>(forced);
  const [file, setFile] = React.useState(p['File Name'] ?? 'blood-test-march.pdf');
  const [progress, setProgress] = React.useState(64);
  const input = React.useRef<HTMLInputElement>(null);
  const timer = React.useRef<number | undefined>(undefined);
  React.useEffect(() => { setState(forced); setFile(p['File Name'] ?? 'blood-test-march.pdf'); setProgress(64); }, [forced, p['File Name']]);
  React.useEffect(() => () => window.clearInterval(timer.current), []);
  const start = (f: File) => {
    setFile(f.name);
    if (f.size > 10 * 1024 * 1024) { setState('Error'); return; }
    setState('Uploading'); setProgress(0);
    window.clearInterval(timer.current);
    timer.current = window.setInterval(() => setProgress((x) => {
      if (x >= 100) { window.clearInterval(timer.current); setState('Uploaded'); return 100; }
      return x + 10;
    }), 120);
  };
  const reset = () => { window.clearInterval(timer.current); setState('Default'); };
  const busy = state === 'Uploading' || state === 'Uploaded';
  return (
    <div className="field field--upload" data-state={state}>
      <span className="ts-sm-medium">{Label}</span>
      {busy ? (
        <div className="file-row">
          <Icon name="File Text" size={24} />
          <div className="file-row__body">
            <span className="ts-sm-medium">{file}</span>
            {state === 'Uploading' ? (
              <>
                <div className="progress" role="progressbar" aria-label={`Uploading ${file}`} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><div className="progress__bar" style={{ width: `${progress}%` }} /></div>
                <span className="file-row__meta ts-xs-regular">Uploading… {progress}%</span>
              </>
            ) : (
              <span className="file-row__meta file-row__meta--done ts-xs-regular">1.2 MB · Uploaded</span>
            )}
          </div>
          <IconButton Type="Ghost" Size="xs" Icon={state === 'Uploading' ? 'Icon/Close' : 'Icon/Delete'} label={state === 'Uploading' ? 'Cancel upload' : 'Remove file'} onClick={reset} />
        </div>
      ) : (
        <div
          className="dropzone"
          onDragOver={(e) => { e.preventDefault(); if (state !== 'Disabled') setState('Hover'); }}
          onDragLeave={() => setState(forced === 'Hover' ? 'Default' : forced)}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) start(f); }}
        >
          <Icon name="Upload" size={24} />
          <span className="dropzone__text ts-sm-medium">{state === 'Hover' ? 'Drop the file to upload' : 'Drag a file here or'}</span>
          {state !== 'Hover' && <Button Type="Outline" Size="sm" Label="Browse files" State={state === 'Disabled' ? 'Disabled' : 'Default'} onClick={() => input.current?.click()} />}
          <span className="dropzone__hint ts-xs-regular">{hint}</span>
          <input ref={input} type="file" hidden accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => { const f = e.target.files?.[0]; if (f) start(f); e.target.value = ''; }} />
        </div>
      )}
      {state === 'Error' && <span className="field__error ts-xs-regular" role="alert">{error}</span>}
    </div>
  );
}

// ---------- OTP / Field (Molecule) ----------
type OTPFieldState = 'Default' | 'Filled' | 'Error' | 'Disabled' | 'Success';
export type OTPFieldProps = { State?: OTPFieldState; Label?: string; Message?: string; 'Error Message'?: string; 'Success Message'?: string; length?: 4 | 6 };
/** Type or paste 6 digits: 123456 verifies (Success), any other code shows Error. */
export function OTPField(p: OTPFieldProps) {
  const { State = 'Default', Label = 'Verification code', length = 6 } = p;
  const preset = State === 'Default' ? '' : '482913'.slice(0, length);
  const [digits, setDigits] = React.useState<string[]>(preset.split('').concat(Array(length).fill('')).slice(0, length));
  const [state, setState] = React.useState<OTPFieldState>(State);
  const refs = React.useRef<(HTMLInputElement | null)[]>([]);
  React.useEffect(() => { setDigits(preset.split('').concat(Array(length).fill('')).slice(0, length)); setState(State); }, [State, length]);
  const commit = (next: string[]) => {
    setDigits(next);
    const code = next.join('');
    setState(code.length === length ? (code === '123456'.slice(0, length) ? 'Success' : 'Error') : code ? 'Filled' : 'Default');
  };
  const onInput = (i: number, v: string) => {
    const clean = v.replace(/\D/g, '');
    if (!clean) { const n = [...digits]; n[i] = ''; commit(n); return; }
    const n = [...digits];
    clean.split('').forEach((c, k) => { if (i + k < length) n[i + k] = c; });
    commit(n);
    refs.current[Math.min(i + clean.length, length - 1)]?.focus();
  };
  const cellState = (i: number): OTPCellState =>
    state === 'Disabled' ? 'Disabled' : state === 'Error' ? 'Error' : state === 'Success' ? 'Success' : digits[i] ? 'Filled' : 'Default';
  const message = state === 'Error' ? (p['Error Message'] ?? 'The code is incorrect. Try again.') : state === 'Success' ? (p['Success Message'] ?? 'Code verified') : (p.Message ?? 'Sent to +971 50 ••• 4567');
  return (
    <div className="otp-field" data-state={state} role="group" aria-label={Label}>
      <span className="ts-sm-medium">{Label}</span>
      <div className="otp-field__cells">
        {digits.map((d, i) => (
          <input
            key={i} ref={(el) => { refs.current[i] = el; }} className="otp-cell ts-2xl-semi-bold" data-state={cellState(i)} value={d}
            inputMode="numeric" autoComplete={i === 0 ? 'one-time-code' : 'off'} aria-label={`Digit ${i + 1}`} disabled={state === 'Disabled'}
            onChange={(e) => onInput(i, e.target.value.slice(d ? 1 : 0) || e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Backspace' && !d && i > 0) refs.current[i - 1]?.focus(); }}
            onPaste={(e) => { e.preventDefault(); onInput(i, e.clipboardData.getData('text')); }}
          />
        ))}
      </div>
      <span className="otp-field__message ts-xs-regular" aria-live="polite">{message}</span>
    </div>
  );
}

// ---------- Stepper (Molecule) ----------
export type StepperProps = { State?: 'Default' | 'Min' | 'Max' | 'Disabled'; Value?: string; min?: number; max?: number; label?: string };
export function Stepper({ State = 'Default', Value = '2', min = 1, max = 10, label = 'Tablets per dose' }: StepperProps) {
  const start = State === 'Min' ? min : State === 'Max' ? max : Number(Value) || min;
  const [n, setN] = React.useState(start);
  React.useEffect(() => setN(start), [start]);
  const off = State === 'Disabled';
  return (
    <div className="stepper" data-state={State} role="spinbutton" aria-label={label} aria-valuenow={n} aria-valuemin={min} aria-valuemax={max}
      onKeyDown={(e) => { if (e.key === 'ArrowUp') setN(Math.min(max, n + 1)); if (e.key === 'ArrowDown') setN(Math.max(min, n - 1)); }}>
      <IconButton Type="Outline" Size="base" Icon="Icon/Minus" label="Decrease" State={off || n <= min ? 'Disabled' : 'Default'} onClick={() => setN(n - 1)} />
      <span className="stepper__value ts-base-semi-bold">{n}</span>
      <IconButton Type="Outline" Size="base" Icon="Icon/Add" label="Increase" State={off || n >= max ? 'Disabled' : 'Default'} onClick={() => setN(n + 1)} />
    </div>
  );
}

// ---------- Select / Dropdown (Organism) ----------
export type SelectDropdownProps = {
  Open?: 'False' | 'True';
  State?: 'Default' | 'Hover' | 'Filled' | 'Error' | 'Disabled' | 'Focus' | 'Success';
  Label?: string; Placeholder?: string; Value?: string; 'Error Message'?: string;
  options?: string[];
  /** keep the menu in the page flow (docs grids) instead of floating */
  inline?: boolean;
};
const DOCTORS = ['Dr. Dana Khalil', 'Dr. Omar Haddad', 'Dr. Lina Farouk', 'Dr. Youssef Nabil', 'Dr. Sara Mansour', 'Dr. Karim Adel', 'Dr. Hala Said'];
export function SelectDropdown(p: SelectDropdownProps) {
  const { State = 'Default', Label = 'Doctor', Placeholder = 'Choose a doctor', options = DOCTORS } = p;
  const initialValue = State === 'Filled' || State === 'Error' || State === 'Success' || State === 'Disabled' ? (p.Value ?? 'Dr. Dana Khalil') : '';
  const [open, setOpen] = React.useState(p.Open === 'True');
  const [value, setValue] = React.useState(initialValue);
  const [active, setActive] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const id = React.useId();
  React.useEffect(() => setOpen(p.Open === 'True'), [p.Open]);
  React.useEffect(() => setValue(initialValue), [initialValue]);
  React.useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);
  const choose = (o: string) => { setValue(o); setOpen(false); };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false);
    if (e.key === 'ArrowDown') { e.preventDefault(); if (!open) setOpen(true); else setActive((active + 1) % options.length); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive((active - 1 + options.length) % options.length); }
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (open) choose(options[active]); else setOpen(true); }
  };
  const shown = open ? 'Focus' : State;
  return (
    <div className={`field select ${p.inline ? 'select--static' : ''}`} data-state={shown} ref={ref}>
      <label className="ts-sm-medium" id={`${id}-label`}>{Label}</label>
      <div
        className="control ts-sm-regular" role="combobox" tabIndex={State === 'Disabled' ? -1 : 0} aria-expanded={open} aria-controls={`${id}-list`}
        aria-labelledby={`${id}-label`} aria-invalid={State === 'Error' || undefined} onClick={() => setOpen(!open)} onKeyDown={onKey}
      >
        <span className="select__value" data-placeholder={!value}>{value || Placeholder}</span>
        {State === 'Error' && !open && <Icon name="Alert Circle" size={20} className="control__status-error" label="Error" />}
        {State === 'Success' && !open && <Icon name="Check Circle" size={20} className="control__status-success" label="Valid" />}
        <Icon name={open ? 'Chevron Up' : 'Chevron Down'} size={20} />
      </div>
      {open && (
        <div className="menu" role="listbox" id={`${id}-list`}>
          {options.map((o, i) => (
            <MenuItem key={o} role="option" Label={o} {...{ 'Show Leading Icon': false }} State={o === value ? 'Selected' : i === active ? 'Hover' : 'Default'} onClick={() => choose(o)} />
          ))}
        </div>
      )}
      {State === 'Error' && !open && <span className="field__message ts-xs-regular">{p['Error Message'] ?? 'Choose a doctor to continue'}</span>}
    </div>
  );
}
