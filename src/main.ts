import { LoginPage } from "./pages/login/index.ts";
import { RegistrationPage } from "./pages/register/index.ts";
import { MainPage } from "./pages/main/index.ts";
import { DATA_CHATS, DATA_PROFILE } from "./utils/constants.ts";
import { ProfilePage } from "./pages/profile/index.ts";
import { ErrorPage } from "./pages/error/index.ts";
import "./styles/main.scss";

const getPage = () => {
    switch (window.location.pathname) {
        case "/login": {
            return new LoginPage();
        }
        case "/register": {
            return new RegistrationPage();
        }
        case "/profile/edit": {
            return new ProfilePage({ profile: DATA_PROFILE, url: "/profile" });
        }
        case "/profile/change-password": {
            return new ProfilePage({ profile: DATA_PROFILE, url: "/profile" });
        }
        case "/profile": {
            return new ProfilePage({ profile: DATA_PROFILE, url: "/" });
        }
        case "/": {
            return new MainPage({ chats: DATA_CHATS, activeChat: null });
        }
        default: {
            const pathname = window.location.pathname.slice(1);
            const activeChat = DATA_CHATS.find((person) => person.id === pathname);
            if (activeChat) {
                return new MainPage({ activeChat, chats: DATA_CHATS });
            }
            return new ErrorPage({ title: "404" });
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("app");
    if (root) {
        const page = getPage();
        root.innerHTML = "";
        root.append(page.getContent() as Node);
        page.dispatchComponentDidMount();
    }
});
