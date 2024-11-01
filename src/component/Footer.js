function Footer({children}) {
    console.log(children)
    return(
        <footer>
            <h1>{children}</h1>
        </footer>

    );
}

export default Footer;