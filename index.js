function getPageLanguages() {
    function pInfo(page) {
        var currentFolders = page.path.split('/');

        if (0 === currentFolders.length) {
            return null;
        }

        var lang = currentFolders.shift();
        var key;

        if (lang !== page.lang) {
            // do not start by language
            return null;
        }

        if (page.contentId !== undefined) {
            key = page.contentId;
        } else {
            key = currentFolders.join('/');
        }

        return {
            lang: lang,
            key: key
        };
    }

    var here = pInfo(this.page);
    var versions = [];

    if (null === here) {
        return [];
    }

    var pages = this.site.pages;

    for (var i=0; i<pages.length; i++) {
        var other = pInfo(pages.data[i]);
        if (null !== other && other.key === here.key) {
            versions.push({
                url: '/'+pages.data[i].path,
                label: other.lang
            });
        }
    }



    return versions;
}






hexo.extend.helper.register('getPageLanguages', getPageLanguages);

module.exports = getPageLanguages;
