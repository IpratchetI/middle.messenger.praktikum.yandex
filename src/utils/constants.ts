import defaultImage from "../assets/default-image.png";

export type Chat = {
    name: string;
    avatar: string | null;
    new: number;
    id: string;
    messanges: {
        author: string;
        message: string;
        date: string;
    }[];
} | null;

export type Chats = Chat[];

export type TProfile = {
    email: string;
    login: string;
    name: string;
    secondName: string;
    displayName: string;
    phone: string;
    avatar: string;
};

export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    year: "numeric",
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

export const DATA_CHATS = [
    {
        name: "Дед",
        avatar: defaultImage,
        new: 0,
        id: "algsdfgjsdfgjflkgsjdflkjsdflkgj123141",
        messanges: [
            {
                author: "Вы",
                message: "какой-то текст",
                date: "2023-08-10T12:00:00.000Z",
            },
            {
                author: "Дед",
                message: "Ку",
                date: "2023-09-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "whats up?",
                date: "2023-09-10T12:01:00.012Z",
            },
            {
                author: "Вы",
                message: "го в ЛОЛ?",
                date: "2023-09-10T12:01:00.123Z",
            },
            {
                author: "Дед",
                message: "Погнали",
                date: "2021-08-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "какой-то текст",
                date: "2021-08-10T12:00:00.000Z",
            },
            {
                author: "Дед",
                message: "Ага",
                date: "2023-09-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "Как?",
                date: "2023-09-10T12:01:00.012Z",
            },
            {
                author: "Вы",
                message: "пошли",
                date: "2023-09-10T12:01:00.123Z",
            },
            {
                author: "Дед",
                message: "какой то текст",
                date: "2021-08-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2021-08-10T12:00:00.000Z",
            },
            {
                author: "Дед",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.012Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.123Z",
            },
            {
                author: "Дед",
                message: "какой то текст",
                date: "2021-08-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2021-08-10T12:00:00.000Z",
            },
            {
                author: "Дед",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.012Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.123Z",
            },
            {
                author: "Дед",
                message: "какой то текст",
                date: "2021-08-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2021-08-10T12:00:00.000Z",
            },
            {
                author: "Дед",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.012Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.123Z",
            },
            {
                author: "Дед",
                message:
                    "Lorem Ipsum - это текст- часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
                date: "2021-08-10T12:01:00.000Z",
            },
        ],
    },
    {
        name: "Профиль1",
        avatar: null,
        id: "fdslgjkdjlfshldfhjd",
        new: 0,
        messanges: [
            {
                author: "Вы",
                message: "какой-то текст",
                date: "2023-09-10T12:00:00.000Z",
            },
            {
                author: "Профиль1",
                message: "hello",
                date: "2023-09-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "какой-то текст",
                date: "2023-09-10T12:01:00.012Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.123Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2023-09-17T12:01:00.000Z",
            },
        ],
    },
    {
        name: "Профиль2",
        avatar: null,
        id: "alfmdlskmglasmdgaksdmg",
        new: 1,
        messanges: [
            {
                author: "Вы",
                message: "какой-то текст",
                date: "2023-09-10T12:00:00.000Z",
            },
            {
                author: "Дед",
                message: "Привееет",
                date: "2023-09-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "какой-то текст",
                date: "2023-09-10T12:01:00.012Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.123Z",
            },
            {
                author: "Дед",
                message: "Ваау",
                date: "2023-09-16T12:01:00.000Z",
            },
        ],
    },
    {
        name: "Профиль3",
        id: "12321kfsdlkamfklsa",
        avatar: null,
        new: 2,
        messanges: [
            {
                author: "Вы",
                message: "какой-то текст",
                date: "2023-09-10T12:00:00.000Z",
            },
            {
                author: "Профиль1",
                message: "Привееет",
                date: "2023-09-10T12:01:00.000Z",
            },
            {
                author: "Вы",
                message: "какой-то текст",
                date: "2023-09-10T12:01:00.012Z",
            },
            {
                author: "Вы",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.123Z",
            },
            {
                author: "Профиль1",
                message: "какой то текст",
                date: "2023-09-10T12:01:00.000Z",
            },
        ],
    },
];

export const DATA_PROFILE = {
    email: "alexander@gmail.com",
    login: "pratchet",
    name: "Александр",
    secondName: "Царьков",
    displayName: "Александр",
    phone: "+7-999-999-99-99",
    avatar: defaultImage,
};
