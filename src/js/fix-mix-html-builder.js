/**
 * mix-html-builder temporary fix for images START
 */
document.addEventListener('DOMContentLoaded', () => {
    let pathName = document.location.pathname;
    pathName = pathName.substring(0, pathName.lastIndexOf('/') + 1);

    document.body.innerHTML = document.body.innerHTML.replace(
        /\/public\//g,
        pathName
    );
});
/**
 * END
 */
