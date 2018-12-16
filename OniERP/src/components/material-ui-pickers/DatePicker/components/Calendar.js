"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var keycode_1 = __importDefault(require("keycode"));
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var react_event_listener_1 = __importDefault(require("react-event-listener"));
var date_utils_1 = require("../../_helpers/date-utils");
var WithUtils_1 = require("../../_shared/WithUtils");
var prop_types_1 = __importDefault(require("../../constants/prop-types"));
var CalendarHeader_1 = __importDefault(require("./CalendarHeader"));
var Day_1 = __importDefault(require("./Day"));
var DayWrapper_1 = __importDefault(require("./DayWrapper"));
var SlideTransition_1 = __importDefault(require("./SlideTransition"));
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            slideDirection: 'left',
            currentMonth: _this.props.utils.getStartOfMonth(_this.props.date),
        };
        _this.onDateSelect = function (day, isFinish) {
            if (isFinish === void 0) { isFinish = true; }
            var _a = _this.props, date = _a.date, utils = _a.utils;
            _this.props.onChange(utils.mergeDateAndTime(day, date), isFinish);
        };
        _this.handleChangeMonth = function (newMonth, slideDirection) {
            _this.setState({ currentMonth: newMonth, slideDirection: slideDirection });
        };
        _this.validateMinMaxDate = function (day) {
            var _a = _this.props, minDate = _a.minDate, maxDate = _a.maxDate, utils = _a.utils;
            return ((minDate && utils.isBeforeDay(day, utils.date(minDate))) ||
                (maxDate && utils.isAfterDay(day, utils.date(maxDate))));
        };
        _this.shouldDisablePrevMonth = function () {
            var _a = _this.props, utils = _a.utils, disablePast = _a.disablePast, minDate = _a.minDate;
            var now = utils.date();
            return !utils.isBefore(utils.getStartOfMonth(disablePast && utils.isAfter(now, minDate) ? now : utils.date(minDate)), _this.state.currentMonth);
        };
        _this.shouldDisableNextMonth = function () {
            var _a = _this.props, utils = _a.utils, disableFuture = _a.disableFuture, maxDate = _a.maxDate;
            var now = utils.date();
            return !utils.isAfter(utils.getStartOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : utils.date(maxDate)), _this.state.currentMonth);
        };
        _this.shouldDisableDate = function (day) {
            var _a = _this.props, disablePast = _a.disablePast, disableFuture = _a.disableFuture, shouldDisableDate = _a.shouldDisableDate, utils = _a.utils;
            return Boolean((disableFuture && utils.isAfterDay(day, utils.date())) ||
                (disablePast && utils.isBeforeDay(day, utils.date())) ||
                _this.validateMinMaxDate(day) ||
                (shouldDisableDate && shouldDisableDate(day)));
        };
        _this.moveToDay = function (day) {
            if (day && !_this.shouldDisableDate(day)) {
                _this.onDateSelect(day, false);
            }
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.props, theme = _a.theme, date = _a.date, utils = _a.utils;
            switch (keycode_1.default(event)) {
                case 'up':
                    _this.moveToDay(utils.addDays(date, -7));
                    break;
                case 'down':
                    _this.moveToDay(utils.addDays(date, 7));
                    break;
                case 'left':
                    theme.direction === 'ltr'
                        ? _this.moveToDay(utils.addDays(date, -1))
                        : _this.moveToDay(utils.addDays(date, 1));
                    break;
                case 'right':
                    theme.direction === 'ltr'
                        ? _this.moveToDay(utils.addDays(date, 1))
                        : _this.moveToDay(utils.addDays(date, -1));
                    break;
                default:
                    // if keycode is not handled, stop execution
                    return;
            }
            // if event was handled prevent other side effects (e.g. page scroll)
            event.preventDefault();
        };
        _this.renderWeeks = function () {
            var utils = _this.props.utils;
            var currentMonth = _this.state.currentMonth;
            var weeks = utils.getWeekArray(currentMonth);
            return weeks.map(function (week) { return (React.createElement("div", { key: "week-" + week[0].toString(), className: _this.props.classes.week }, _this.renderDays(week))); });
        };
        _this.renderDays = function (week) {
            var _a = _this.props, date = _a.date, renderDay = _a.renderDay, utils = _a.utils;
            var selectedDate = utils.startOfDay(date);
            var currentMonthNumber = utils.getMonth(_this.state.currentMonth);
            var now = utils.date();
            return week.map(function (day) {
                var disabled = _this.shouldDisableDate(day);
                var dayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
                var dayComponent = (React.createElement(Day_1.default, { current: utils.isSameDay(day, now), hidden: !dayInCurrentMonth, disabled: disabled, selected: utils.isSameDay(selectedDate, day) }, utils.getDayText(day)));
                if (renderDay) {
                    dayComponent = renderDay(day, selectedDate, dayInCurrentMonth, dayComponent);
                }
                return (React.createElement(DayWrapper_1.default, { key: day.toString(), value: day, dayInCurrentMonth: dayInCurrentMonth, disabled: disabled, onSelect: _this.onDateSelect }, dayComponent));
            });
        };
        return _this;
    }
    Calendar.getDerivedStateFromProps = function (nextProps, state) {
        if (!nextProps.utils.isEqual(nextProps.date, state.lastDate)) {
            return {
                lastDate: nextProps.date,
                currentMonth: nextProps.utils.getStartOfMonth(nextProps.date),
            };
        }
        return null;
    };
    Calendar.prototype.componentDidMount = function () {
        var _a = this.props, date = _a.date, minDate = _a.minDate, maxDate = _a.maxDate, utils = _a.utils, disablePast = _a.disablePast;
        if (this.shouldDisableDate(date)) {
            var closestEnabledDate = date_utils_1.findClosestEnabledDate({
                date: date,
                utils: utils,
                minDate: minDate,
                maxDate: maxDate,
                disablePast: Boolean(disablePast),
                disableFuture: Boolean(disablePast),
                shouldDisableDate: this.shouldDisableDate,
            });
            this.onDateSelect(closestEnabledDate || minDate, false);
        }
    };
    Calendar.prototype.render = function () {
        var _a = this.state, currentMonth = _a.currentMonth, slideDirection = _a.slideDirection;
        var _b = this.props, classes = _b.classes, allowKeyboardControl = _b.allowKeyboardControl;
        return (React.createElement(React.Fragment, null,
            allowKeyboardControl && React.createElement(react_event_listener_1.default, { target: "window", onKeyDown: this.handleKeyDown }),
            React.createElement(CalendarHeader_1.default, { slideDirection: slideDirection, currentMonth: currentMonth, onMonthChange: this.handleChangeMonth, leftArrowIcon: this.props.leftArrowIcon, rightArrowIcon: this.props.rightArrowIcon, disablePrevMonth: this.shouldDisablePrevMonth(), disableNextMonth: this.shouldDisableNextMonth() }),
            React.createElement(SlideTransition_1.default, { slideDirection: slideDirection, transKey: currentMonth.toString(), className: classes.transitionContainer },
                React.createElement("div", { 
                    // @ts-ignore Autofocus required for getting work keyboard navigation feature
                    autoFocus: true }, this.renderWeeks()))));
    };
    Calendar.propTypes = {
        date: PropTypes.object.isRequired,
        minDate: prop_types_1.default.date,
        maxDate: prop_types_1.default.date,
        classes: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        disablePast: PropTypes.bool,
        disableFuture: PropTypes.bool,
        leftArrowIcon: PropTypes.node,
        rightArrowIcon: PropTypes.node,
        renderDay: PropTypes.func,
        theme: PropTypes.object.isRequired,
        shouldDisableDate: PropTypes.func,
        utils: PropTypes.object.isRequired,
        allowKeyboardControl: PropTypes.bool,
        innerRef: PropTypes.any,
    };
    Calendar.defaultProps = {
        minDate: '1900-01-01',
        maxDate: '2100-01-01',
        disablePast: false,
        disableFuture: false,
        leftArrowIcon: undefined,
        rightArrowIcon: undefined,
        renderDay: undefined,
        allowKeyboardControl: false,
        shouldDisableDate: function () { return false; },
    };
    return Calendar;
}(React.Component));
exports.Calendar = Calendar;
exports.styles = function (theme) { return ({
    transitionContainer: {
        minHeight: 36 * 6,
        marginTop: theme.spacing.unit * 1.5,
    },
    week: {
        display: 'flex',
        justifyContent: 'center',
    },
}); };
exports.default = withStyles_1.default(exports.styles, {
    name: 'MuiPickersCalendar',
    withTheme: true,
})(WithUtils_1.withUtils()(Calendar));
