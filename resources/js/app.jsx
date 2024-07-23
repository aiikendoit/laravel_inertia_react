import "./bootstrap";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "@/Layouts/Layout";

createInertiaApp({
    title: title => title? `${title} - Laravel React Inertia` : "Larave React Inertia",
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout || ((page) => <Layout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 250,

        // The color of the progress bar...
        color: "#ffa92d",

        // Whether the NProgress spinner will be shown...
        showSpinner: true,
    },
});
