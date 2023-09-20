import { DATE_OPTIONS } from "./constants";

export const converChatsListsDate = (date: string): string => {
    const currentDate = new Date();
    const formattedDate = new Date(date);
    const rusFormattedDate = formattedDate.toLocaleString("ru", DATE_OPTIONS).split(" ");
    if (currentDate.getDate() === formattedDate.getDate()) return "сегодня";
    if (currentDate.getDate() - 1 === formattedDate.getDate()) return "вчера";
    if (currentDate.getFullYear() === formattedDate.getFullYear()) {
        return `${rusFormattedDate[1]} ${rusFormattedDate[2].slice(0, 3)}`;
    }
    return `${rusFormattedDate[1]} ${rusFormattedDate[2].slice(0, 3)} ${rusFormattedDate[3]}`;
};

export const converChatDate = (date: string): string => {
    const formattedDate = new Date(date);
    const hours = formattedDate.getHours();
    const minutes = formattedDate.getMinutes();
    if (minutes < 10) {
        return `${hours}:0${minutes}`;
    }
    return `${hours}:${minutes}`;
};
