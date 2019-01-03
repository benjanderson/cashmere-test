export interface PresetItem {
  presetLabel: string;
  range: Range;
}

export interface Range {
  fromDate: Date;
  toDate: Date;
}

export interface NgxDrpOptions {
  presets: Array<PresetItem>;
  format: string;
  range: Range;
  excludeWeekends?: boolean;
  locale?: string;
  fromMinMax?: Range;
  toMinMax?: Range;
  applyLabel?: string;
  cancelLabel?: string;
  placeholder?: string;
  startDatePrefix?: string;
  endDatePrefix?: string;
}
