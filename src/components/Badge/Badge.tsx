import { classNames } from 'primereact/utils';
import './Badge.scss';

export type TSeverity = 'pending' | 'confirmed' | 'denied' | 'hold' | 'warning' | 'primary';

interface IBadgeIcon {
  icon: string;
  iconPosition?: 'start' | 'end';
}

interface IBadge extends Partial<IBadgeIcon> {
  title: string;
}
interface IBadgeOptions {
  severity: TSeverity;
  badge: IBadge;
  onClick?: () => void;
  className?: string;
}

interface IBadgeSplitOptions extends Omit<IBadgeOptions, 'badge'> {
  badge: {
    label: string;
    labelIcon?: IBadgeIcon;
    value: string;
    valueIcon?: IBadgeIcon;
  };
}

function BadgeIcon(options: IBadgeIcon) {
  return (
    <div className={`ec-badge-icon-${options.iconPosition}`}>
      <i className={options.icon}></i>
    </div>
  );
}

function BadgeSolid(options: IBadgeOptions) {
  const iconPosition = options?.badge?.iconPosition || 'start';
  const badgeID = `ec-badge-${options.severity}-${options.badge.title}`;

  return (
    <div className={classNames(`ec-badge-solid-${options.severity}`, options?.className)} id={badgeID} onClick={options?.onClick}>
      {options?.badge?.icon && iconPosition === 'start' && <BadgeIcon icon={options.badge.icon} iconPosition={iconPosition} />}
      {options?.badge?.title && <div className="ec-badge-title">{options.badge.title}</div>}
      {options?.badge?.icon && iconPosition === 'end' && <BadgeIcon icon={options.badge.icon} iconPosition={iconPosition} />}
    </div>
  );
}

function BadgeLight(options: IBadgeOptions) {
  const iconPosition = options?.badge?.iconPosition || 'start';
  const badgeID = `ec-badge-${options.severity}-${options.badge.title}`;

  return (
    <div className={classNames(`ec-badge-light-${options.severity}`, options?.className)} id={badgeID} onClick={options?.onClick}>
      {options?.badge?.icon && iconPosition === 'start' && <BadgeIcon icon={options.badge.icon} iconPosition={iconPosition} />}
      {options?.badge?.title && <div className="ec-badge-title">{options.badge.title}</div>}
      {options?.badge?.icon && iconPosition === 'end' && <BadgeIcon icon={options.badge.icon} iconPosition={iconPosition} />}
    </div>
  );
}

function BadgeOutline(options: IBadgeOptions) {
  const iconPosition = options?.badge?.iconPosition || 'start';
  const badgeID = `ec-badge-${options.severity}-${options.badge.title}`;

  return (
    <div className={classNames(`ec-badge-outline-${options.severity}`, options?.className)} id={badgeID} onClick={options?.onClick}>
      {options?.badge?.icon && iconPosition === 'start' && <BadgeIcon icon={options.badge.icon} iconPosition={iconPosition} />}
      {options?.badge?.title && <div className="ec-badge-title">{options.badge.title}</div>}
      {options?.badge?.icon && iconPosition === 'end' && <BadgeIcon icon={options.badge.icon} iconPosition={iconPosition} />}
    </div>
  );
}

function BadgeLink(options: IBadgeOptions) {
  const iconPosition = options?.badge?.iconPosition || 'start';
  const badgeID = `ec-badge-${options.severity}-${options.badge.title}`;

  return (
    <div className={classNames(`ec-badge-link-${options.severity}`, options?.className)} id={badgeID} onClick={options?.onClick}>
      {options?.badge?.icon && iconPosition === 'start' && <BadgeIcon icon={options.badge.icon} iconPosition={iconPosition} />}
      {options?.badge?.title && <div className="ec-badge-title">{options.badge.title}</div>}
      {options?.badge?.icon && iconPosition === 'end' && <BadgeIcon icon={options.badge.icon} iconPosition={iconPosition} />}
    </div>
  );
}

function BadgePreset(options: IBadgeOptions) {
  const badgeID = `ec-badge-${options.severity}-${options.badge.title}`;
  return (
    <div className={classNames(`ec-badge-preset-${options.severity}`, options?.className)} id={badgeID} onClick={options?.onClick}>
      {options?.badge?.title && <div className="ec-badge-title">{options.badge.title}</div>}
    </div>
  );
}

function BadgeSplit(options: IBadgeSplitOptions) {
  const iconPositionLabel = options?.badge?.labelIcon?.iconPosition || 'start';
  const iconPositionValue = options?.badge?.valueIcon?.iconPosition || 'start';
  const badgeID = `ec-badge-${options.severity}-${options.badge.label}`;
  const badgeClass = `ec-badge-split-${options.severity}`;
  return (
    <div className={classNames(badgeClass, options?.className)} id={badgeID} onClick={options?.onClick}>
      <div className={classNames('ec-badge-split-label', `${badgeClass}-label`)}>
        {options?.badge?.labelIcon?.icon && iconPositionLabel === 'start' && <BadgeIcon icon={options.badge.labelIcon.icon} iconPosition={iconPositionLabel} />}
        {options?.badge?.label && <div className="ec-badge-title">{options.badge.label}</div>}
        {options?.badge?.labelIcon?.icon && iconPositionLabel === 'end' && <BadgeIcon icon={options.badge.labelIcon.icon} iconPosition={iconPositionLabel} />}
      </div>
      <div className={classNames('ec-badge-split-value', `${badgeClass}-value`)}>
        {options?.badge?.valueIcon?.icon && iconPositionValue === 'start' && <BadgeIcon icon={options.badge.valueIcon.icon} iconPosition={iconPositionValue} />}
        {options?.badge?.value && <div className="ec-badge-title">{options.badge.value}</div>}
        {options?.badge?.valueIcon?.icon && iconPositionValue === 'end' && <BadgeIcon icon={options.badge.valueIcon.icon} iconPosition={iconPositionValue} />}
      </div>
    </div>
  );
}

export { BadgeSolid, BadgeLight, BadgeLink, BadgeOutline, BadgePreset, BadgeSplit };
