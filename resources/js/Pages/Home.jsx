import { Link } from "@inertiajs/react";

export default function Home({ name }) {
    return (
        <>
            <h1 className="title">Welcome Home {name}</h1>
            <Link preserveScroll href="/" className="block title mt-[1000px]">
                {new Date().toLocaleTimeString()}
            </Link>
        </>
    );
}

// import Layout from "../Layouts/Layout";

// function Home({name}) {
//     return (
//         <>
//             <h1 className="title">Welcome Home {name}</h1>
//         </>
//     );
// }

// Home.layout = page => <Layout children = {page} />

// export default Home
