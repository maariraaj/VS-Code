import Link from "next/link";
import { Fragment } from "react";

export default function Page() {
    return (
        <Fragment>
            <h1>Hello, About Us Page!</h1>
            <ul>
                <li><Link href="/aboutus/1">Yash</Link></li>
                <li><Link href="/aboutus/2">Vaibhav</Link></li>
                <li><Link href="/aboutus/3">Suresh</Link></li>
            </ul>
        </Fragment>
    )
};