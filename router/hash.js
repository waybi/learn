function Router() {
    this.routes = {};
    this.currentUrl = '';
}
Router.prototype.route = function (path, callback) {
    this.routes[path] = callback || function () { };
};
Router.prototype.refresh = function () {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
};
Router.prototype.init = function () {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}
window.Router = new Router();
window.Router.init();
var content = document.querySelector('body');
// change Page anything
function changeBgColor(color) {
    content.style.backgroundColor = color;
}
Router.route('/', function () {
    changeBgColor('white');
});
Router.route('/orange', function () {
    changeBgColor('orange');
});
Router.route('/purple', function () {
    changeBgColor('purple');
});
