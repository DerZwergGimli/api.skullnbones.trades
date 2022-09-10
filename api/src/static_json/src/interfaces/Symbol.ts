export interface Symbol {
	symbol: string;
	ticker: string;
	has_daily: boolean;
	has_weekly_and_monthly: number;
	minmov2: number;
	session: string;
	timezone: string;
	has_intraday: boolean;
	description: string;
	listed_exchange: string;
	supported_resolutions: string[];
	type: string;
	currency_code: string;
	full_name: string;
	name: string;
	minmovement: number;
	minmov: number;
	exchange: string;
	pricescale: number[];
	minmovement2: number;
	data_status: string;
}