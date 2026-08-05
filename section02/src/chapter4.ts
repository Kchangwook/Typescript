// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "김창욱",
    nickname: "kchangwook",
    birth: "1993.06.30",
    bio: "안녕",
    location: "서울"
}

let user2: User = {
    id: 2,
    name: "김창욱",
    nickname: "kchangwook",
    birth: "1993.06.30",
    bio: "안녕",
    location: "서울"
};

// 인덱스 시그니처
type CountryCode = {
    [key: string]: string;
};

let countryCodes: CountryCode = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
};

type CountryNumberCodes = {
    [key: string]: number;
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 850,
}