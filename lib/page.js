const _page = {
    index : function(req, res) {
        var context = {};

        res.app.render("index", context, function(err, html) {
            if(err) { console.log(err); }
            res.end(html);
        });
    },

    temp : function(req, res) {
        var context = { filename : "temp.ejs" };

        res.app.render("temp", context, function(err, html) {
            if(err) { console.log(err); }
            res.end(html);
        });
    }
}

module.exports.index = _page.index;
module.exports.temp = _page.temp;