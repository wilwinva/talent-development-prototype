function rollOverDialog(a) {
    highlightAttr = $("#s-ongoing-dialog").attr("class"), "highlight" != highlightAttr && ($(".ring-peices").find("path").attr("class", "centerRoll"), $(".ring-peices").find("circle").attr("class", "centerRoll"), $(".ring-peices").find("text").attr("class", "centerRoll"), $("#ring-text").attr("class", "centerRoll ring-peices"), $("#s-ongoing-dialog").attr("class", "centerRoll"))
}

function rollOffDialog() {
    highlightAttr = $("#s-ongoing-dialog").attr("class"), "highlight" != highlightAttr && ($(".ring-peices").find("path").removeAttr("class"), $(".ring-peices").find("circle").removeAttr("class"), $(".ring-peices").find("text").removeAttr("class"), $("#s-ongoing-dialog").removeAttr("class"))
}

function unhightlight() {
    activeSliceId = activeSlice[0].id;
    var a = assocSlices[activeSlice[0].id];
    activeSlice.shift(), $("#" + a.id).attr("class", "unhightlight slice"), $("#" + a.id).attr("style", "fill: #000000;"), $(".ring-peices").find("path").removeAttr("class"), $(".ring-peices").find("circle").removeAttr("class"), $(".ring-peices").find("text").removeAttr("class"), $("#" + a.id).removeAttr("filter"), "s-ongoing-dialog" == activeSliceId && $("#s-center").attr("class", "slice"), document.documentMode && ("s-ongoing-dialog" == activeSliceId ? ($("#" + a.id).find("path").removeAttr("style"), $(".ring-peices").find("path").removeAttr("style"), $(".ring-peices").find("circle").removeAttr("style"), $("#ring-text.ring-peices").find("text").attr("style", "font-size: 26px;font-family: Source Sans Pro;"), $("#convo-bubbles-bottom.ring-peices").find("text").attr("style", "font-size: 12px;font-family: Source Sans Pro;")) : $("#" + a.id).animate({
        svgTransform: "translate(0 0) scale(1)"
    }, 600, "easeOutCubic").find("path").removeAttr("style"))
}

function highlight(a) {
    if (activeSlice.length > 0 && unhightlight(), "s-home" == a ? clickedObjectId = "s-home" : "s-center" == a ? clickedObjectId = "s-ongoing-dialog" : (a = assocSlices[a], clickedObjectId = a.id), "s-home" != clickedObjectId) {
        a = $("#" + clickedObjectId), a.parent().append(a), "s-ongoing-dialog" == clickedObjectId && ($(".ring-peices").find("path").attr("class", "highlight"), $(".ring-peices").find("circle").attr("class", "highlight"), $(".ring-peices").find("text").attr("class", "highlight"), $("#s-center").removeAttr("class"), $("#ring-text").attr("class", "ring-peices"));
        var b = "";
        switch (clickedObjectId) {
            case "s-goal-setting":
                b = "#f-goal-setting";
                break;
            case "s-mid-year-review":
                b = "#f-mid-year";
                break;
            case "s-career-development":
                b = "#f-career-dev";
                break;
            case "s-year-end-review":
                b = "#f-end-year";
                break;
            default:
                b = "#f-goal-setting"
        }
        if (document.documentMode) switch (clickedObjectId) {
            case "s-goal-setting":
                $("#" + clickedObjectId).animate({
                    svgTransform: "translate(-58 -35) scale(1.3)"
                }, 600, "easeOutCubic").find("path").attr("style", "fill:#ff7700");
                break;
            case "s-mid-year-review":
                $("#" + clickedObjectId).animate({
                    svgTransform: "translate(-81 -58) scale(1.3)"
                }, 600, "easeOutCubic").find("path").attr("style", "fill:#ff7700");
                break;
            case "s-career-development":
                $("#" + clickedObjectId).animate({
                    svgTransform: "translate(-58 -80) scale(1.3)"
                }, 600, "easeOutCubic").find("path").attr("style", "fill:#ff7700");
                break;
            case "s-year-end-review":
                $("#" + clickedObjectId).animate({
                    svgTransform: "translate(-35 -58) scale(1.3)"
                }, 600, "easeOutCubic").find("path").attr("style", "fill:#ff7700");
                break;
            case "s-ongoing-dialog":
                $("#" + clickedObjectId).find("path").attr("style", "fill:#ff7700"), $(".ring-peices").find("path").attr("style", "fill:#ffb371"), $(".ring-peices").find("circle").attr("style", "fill:#ffb371"), $("#ring-text.ring-peices").find("text").attr("style", "font-size: 26px;font-family: Source Sans Pro;fill:#df6800"), $("#convo-bubbles-bottom.ring-peices").find("text").attr("style", "font-size: 12px;font-family: Source Sans Pro;fill:#df6800")
        } else $("#" + clickedObjectId).attr("class", "highlight");
        $("#" + clickedObjectId).attr("filter", "url(" + b + ")"), $("#" + clickedObjectId).attr("style", "fill: #FFFFFF;"), activeSlice[0] = a[0]
    }
}

function pulse() {
    for (var a = ["s-goal-setting", "s-mid-year-review", "s-career-development", "s-year-end-review", "s-ongoing-dialog"], b = 0; b < a.length; b++) setTimeout(function(b) {
        $("#" + a[b]).find("path").attr("class", "pulseMe")
    }, 150 * b, b);
    setTimeout(function() {
        $(".slice").find("path").removeAttr("class")
    }, 1350)
}
var activeSlice = [],
    assocSlices = {};
$.each($(".slice"), function() {
    var a = this.id.toString();
    assocSlices[a] = this
}), $(document).ready(function() {
    "#/" == window.location.href.substring(window.location.href.length - 2) && setTimeout(function() {
        pulse()
    }, 600)
});