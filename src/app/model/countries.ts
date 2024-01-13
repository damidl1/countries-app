export interface Countries {
  name: Name
  nativeName: string
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  currencies: Currencies
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  flag: string
  maps: Maps
  population: number
  timezones: string[]
  continents: string[]
  flags: Flags
  capitalInfo: CapitalInfo
  postalCode: PostalCode
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  fra: Fra
}

export interface Fra {
  official: string
  common: string
}

export interface Currencies {
  EUR: Eur
}

export interface Eur {
  name: string
  symbol: string
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  fra: string
}


export interface Ara {
  official: string
  common: string
}

export interface Bre {
  official: string
  common: string
}

export interface Ces {
  official: string
  common: string
}

export interface Cym {
  official: string
  common: string
}

export interface Deu {
  official: string
  common: string
}

export interface Est {
  official: string
  common: string
}

export interface Fin {
  official: string
  common: string
}

export interface Fra2 {
  official: string
  common: string
}

export interface Hrv {
  official: string
  common: string
}

export interface Hun {
  official: string
  common: string
}

export interface Ita {
  official: string
  common: string
}

export interface Jpn {
  official: string
  common: string
}

export interface Kor {
  official: string
  common: string
}

export interface Nld {
  official: string
  common: string
}

export interface Per {
  official: string
  common: string
}

export interface Pol {
  official: string
  common: string
}

export interface Por {
  official: string
  common: string
}

export interface Rus {
  official: string
  common: string
}

export interface Slk {
  official: string
  common: string
}

export interface Spa {
  official: string
  common: string
}

export interface Srp {
  official: string
  common: string
}

export interface Swe {
  official: string
  common: string
}

export interface Tur {
  official: string
  common: string
}

export interface Urd {
  official: string
  common: string
}

export interface Zho {
  official: string
  common: string
}

export interface Eng {
  f: string
  m: string
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface CapitalInfo {
  latlng: number[]
}

export interface PostalCode {
  format: string
  regex: string
}
