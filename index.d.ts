export async function Random(): Promise<{anime: string, character: string, quote: string}>;
export async function Get10RandomQuotes(): Promise<{anime: string, character: string, quote: string}[]>;
export async function GetQuotesByAnimeTitle(title: string, page?: number): Promise<{anime: string, character: string, quote: string}[]>;
export async function GetQuotesByCharacterName(name: string, page?: number): Promise<{anime: string, character: string, quote: string}[]>;
export async function GetAvailableAnimeTitles(): Promise<string[]>;
