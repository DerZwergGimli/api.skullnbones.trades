export interface Config {
  exchanges: ConfigInterfaceExchanges[];
  symbols_types: ConfigInterfaceSymbols_types[];
  supported_resolutions: string[];
  supports_search: boolean;
  supports_group_request: boolean;
  supports_marks: boolean;
  supports_timescale_marks: boolean;
  supports_time: boolean;
}

export interface ConfigInterfaceExchanges {
  value: string;
  name: string;
  desc: string;
}

export interface ConfigInterfaceSymbols_types {
  value: string;
  name: string;
}
