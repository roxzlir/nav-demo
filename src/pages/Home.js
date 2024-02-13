import BookDisplay from "../components/BookDisplay";
import CdDisplay from "../components/CdDisplay";

export default function Home() {
    return (
        <div>
            <p>This is my home page</p>
            <BookDisplay />
            <CdDisplay />
        </div>
    );
}
