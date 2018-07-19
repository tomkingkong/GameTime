/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Battery.js":
/*!************************!*\
  !*** ./lib/Battery.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Target = __webpack_require__(/*! ./Target.js */ "./lib/Target.js");

module.exports = function (_Target) {
  _inherits(Battery, _Target);

  function Battery(x, y, width, height, color, dx, dy, dv) {
    var isExplosion = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;

    _classCallCheck(this, Battery);

    var _this = _possibleConstructorReturn(this, (Battery.__proto__ || Object.getPrototypeOf(Battery)).call(this, x, y, width, height, color, dx, dy, dv, isExplosion = false));

    _this.count = null;
    _this.isExplosion = isExplosion;
    _this.missileCount = 10;
    return _this;
  }

  return Battery;
}(Target);

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Battery = __webpack_require__(/*! ./Battery.js */ "./lib/Battery.js");
var Target = __webpack_require__(/*! ./Target.js */ "./lib/Target.js");
var Weapon = __webpack_require__(/*! ./Weapon.js */ "./lib/Weapon.js");

module.exports = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.playerMissiles = [];
    this.enemyMissiles = [];
    this.targets = [];
    this.explosions = [];
    this.cities = [];
    this.batteries = [];
    this.level = 1;
    this.enemyWeaponCount = 10;
    this.playerMissileCount;
    this.score = 0;
    this.highScore = { playerName: 'TCK', level: 0, score: 0 };
    this.paused = false;
    this.nextLevel = false;
    this.isGameOver = false;
    this.nextGameTimer = 240;
  }

  _createClass(Game, [{
    key: 'gameLoop',
    value: function gameLoop(highScoreInput, start, ctx, c) {
      if (this.paused) {
        this.pause(ctx);
        return;
      } else {
        ctx.clearRect(0, 0, c.width, c.height);
      }

      if (!this.nextLevel && !this.isGameOver) {
        this.animateMissiles(this.playerMissiles, ctx);
        this.animateMissiles(this.enemyMissiles, ctx);
        this.detectCollisions();
        this.drawObjects(ctx);
        if (this.enemyMissiles.length < 1) {
          this.cities.length > 0 ? this.nextLevel = true : this.isGameOver = true;
        }
      } else if (this.nextLevel) {
        if (this.nextGameTimer !== 0) {
          this.drawObjects(ctx);
          this.indicateNextLevel(ctx);
          this.nextGameTimer--;
        } else {
          this.level++;
          this.newGame();
          this.nextGameTimer = 240;
          this.nextLevel = false;
        }
      } else if (this.isGameOver) {
        this.handleGameOver(ctx, highScoreInput, start);
      }
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
    }
  }, {
    key: 'pause',
    value: function pause(ctx) {
      ctx.fillStyle = 'rgb(255, 0, 0)';
      ctx.font = '48px serif';
      ctx.fillText('PAUSED', 210, 300);
    }
  }, {
    key: 'newGame',
    value: function newGame() {
      var eureka = new Target(60, 505, 40, 30, 'rgb(0, 200, 200)', false);
      var sanFrancisco = new Target(135, 510, 40, 30, 'rgb(0, 200, 200)', false);
      var sanLuisObispo = new Target(210, 515, 40, 30, 'rgb(0, 200, 200)', false);
      var santaBarbara = new Target(360, 510, 40, 30, 'rgb(0, 200, 200)', false);
      var losAngelas = new Target(430, 500, 40, 30, 'rgb(0, 200, 200)', false);
      var sanDiego = new Target(500, 515, 40, 30, 'rgb(0, 200, 200)', false);
      var battery1 = new Battery(0, 490, 60, 60, 'rgb(200, 200, 0)', false, 10);
      var battery2 = new Battery(270, 490, 70, 60, 'rgb(200, 200, 0)', false, 10);
      var battery3 = new Battery(540, 490, 60, 60, 'rgb(200, 200, 0)', false, 10);

      if (this.level === 1) {
        this.score = 0;
        this.cities = [eureka, sanFrancisco, sanLuisObispo, santaBarbara, losAngelas, sanDiego];
      } else if (!this.isGameOver) {
        this.score += this.playerMissileCount * 5;
      }
      this.batteries = [battery1, battery2, battery3];
      this.setPlayerMissileCount();
      this.enemyShoot();
    }
  }, {
    key: 'indicateNextLevel',
    value: function indicateNextLevel(ctx) {
      ctx.fillStyle = 'rgb(255, 0, 0)';
      ctx.font = '48px serif';
      ctx.fillText('INCOMING', 180, 300);
      this.drawScore(ctx);
    }
  }, {
    key: 'handleGameOver',
    value: function handleGameOver(ctx, input, button) {
      button.style.display = 'block';
      ctx.fillStyle = 'rgb(255, 0, 0)';
      ctx.font = '48px serif';

      if (this.highScore.score < this.score) {
        ctx.fillText('HIGH SCORE!', 150, 300);
        input.style.display = 'block';
      } else if (this.score !== 0) {
        this.level = 1;
        ctx.fillText('THE END', 195, 300);
      }
    }
  }, {
    key: 'setPlayerMissileCount',
    value: function setPlayerMissileCount() {
      this.playerMissileCount = this.batteries.reduce(function (accumulator, battery) {
        return accumulator + battery.missileCount;
      }, 0);
    }
  }, {
    key: 'setHighScore',
    value: function setHighScore(name) {
      this.highScore = {
        playerName: name.value,
        level: this.level,
        score: this.score
      };

      localStorage.setItem('highscore', JSON.stringify(this.highScore));
    }
  }, {
    key: 'getCurrentHighScore',
    value: function getCurrentHighScore() {
      var currentHigh = JSON.parse(localStorage.getItem('highscore'));

      if (currentHigh) {
        this.highScore = currentHigh;
      }
    }
  }, {
    key: 'drawBatteryCount',
    value: function drawBatteryCount(ctx) {
      var _this = this;

      var batteryCounts = [{ count: 'OUT', x: 0, xPos: 10 }, { count: 'OUT', x: 270, xPos: 285 }, { count: 'OUT', x: 540, xPos: 550 }];

      if (this.batteries.length !== 0) {
        batteryCounts.forEach(function (batCount) {
          _this.batteries.forEach(function (battery) {
            if (battery.x === batCount.x) {
              return batCount.count = battery.missileCount;
            }
          });
        });
      }
      ctx.fillStyle = 'rgb(0, 200, 200)';
      ctx.font = '20px sans-serif';
      batteryCounts.forEach(function (count) {
        return ctx.fillText(count.count, count.xPos + 6, 570);
      });
    }
  }, {
    key: 'drawScore',
    value: function drawScore(ctx) {
      ctx.font = '18px sans-serif';
      ctx.fillStyle = 'rgb(5, 32, 78)';
      ctx.rect(0, 0, 600, 40);
      ctx.fill();
      ctx.fillStyle = 'rgb(255, 255, 255)';
      ctx.fillText('score: ' + this.score, 30, 28);
      ctx.fillText('high score: ' + this.highScore.playerName.toUpperCase() + ' ' + this.highScore.score, 320, 28);
    }
  }, {
    key: 'findBattery',
    value: function findBattery(event) {
      var batteries = this.batteries;

      var batteryXpositions = batteries.map(function (battery) {
        return Math.abs(battery.x - event.layerX);
      });
      var closestBattery = batteryXpositions.indexOf(Math.min.apply(Math, _toConsumableArray(batteryXpositions)));
      var validBattery = batteries[closestBattery];
      var xPos = validBattery.x + 30;

      return { x: xPos, y: 490 };
    }
  }, {
    key: 'playerShoot',
    value: function playerShoot(event) {
      if (this.paused) {
        return;
      }
      var batteries = this.batteries,
          targets = this.targets,
          playerMissiles = this.playerMissiles;

      var batteryPos = this.findBattery(event);
      var mousePos = { x: event.layerX, y: event.layerY };
      var missileTarget = new Target(mousePos.x, mousePos.y, 10, 10, 'rgb(200, 250, 25)', 0, 0);

      mousePos.y > 438 ? missileTarget.y = 435 : event.layerY;

      var counterMissile = new Weapon(batteryPos.x, 490, 5, 5, 'rgb(0, 200, 200)', 0, 0, 12, batteryPos, { x: mousePos.x + 5, y: missileTarget.y + 5 }, 10, true);

      targets.push(missileTarget);
      playerMissiles.push(counterMissile);

      batteries.forEach(function (battery) {
        if (battery.x === counterMissile.p1.x - 30) {
          battery.missileCount -= 1;
        }
        if (battery.missileCount === 0) {
          batteries.splice(batteries.indexOf(battery), 1);
        }
      });
      this.setPlayerMissileCount();
    }
  }, {
    key: 'enemyShoot',
    value: function enemyShoot() {
      var enemyWeaponCount = this.enemyWeaponCount,
          enemyMissiles = this.enemyMissiles;

      var speed = this.level * 0.5;

      for (var i = 0; i < enemyWeaponCount * this.level; i++) {
        var playerTargets = [60, 135, 210, 360, 430, 500, 0, 270, 540];
        var enemyPos1 = { x: randomPos(10, 590), y: randomPos(-500, -100) };
        var enemyPos2 = { x: playerTargets[randomPos(0, 8)] + 25, y: 520 };
        var enemyMissile = new Weapon(enemyPos1.x, enemyPos1.y, 5, 5, 'rgb(255, 0, 0)', 0, 0, 0, enemyPos1, enemyPos2, speed, true);

        enemyMissiles.push(enemyMissile);
      }
      function randomPos(min, max) {
        var minimum = Math.ceil(min);
        var maximum = Math.floor(max);

        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      }
    }
  }, {
    key: 'drawObjects',
    value: function drawObjects(ctx) {
      var _this2 = this;

      var terrain = new Target(0, 520, 600, 80, 'rgb(255, 255, 0)', 0);
      var gameArrays = [this.batteries, this.targets, this.explosions, this.playerMissiles, this.enemyMissiles, this.cities];

      terrain.draw(ctx);
      this.drawBatteryCount(ctx);

      gameArrays.forEach(function (array) {
        return array.forEach(function (obj) {
          obj.count === 0 && obj.isExplosion ? _this2.explosions.shift(obj) : obj.count--;
          obj.draw(ctx);
        });
      });
      this.drawScore(ctx);
    }
  }, {
    key: 'animateMissiles',
    value: function animateMissiles(array) {
      array.forEach(function (missile) {
        missile.missileTail();
        missile.move();
      });
    }
  }, {
    key: 'objectiveDetection',
    value: function objectiveDetection(weapons) {
      var _this3 = this;

      weapons.forEach(function (weapon) {
        var posDiffY = Math.abs(weapon.y - weapon.p2.y);
        var deadWeapon = weapons.indexOf(weapon);

        if (posDiffY < 5) {
          weapons.splice(deadWeapon, 1);
          _this3.targets.splice(deadWeapon, 1);
          weapon.explode(_this3);
        }
      });
    }
  }, {
    key: 'explosionDetection',
    value: function explosionDetection(array) {
      var _this4 = this;

      array.forEach(function (object) {
        _this4.enemyMissiles.forEach(function (weapon) {
          var hypoDiff = Math.hypot(object.x - weapon.x, object.y - weapon.y);
          var deadWeapon = _this4.enemyMissiles.indexOf(weapon);
          var deadTarget = array.indexOf(object);

          if (weapon.isCollidingWith(object) && object.x === weapon.p2.x - 25 && weapon.y > 510) {
            return array.splice(deadTarget, 1);
          } else if (hypoDiff < object.radius) {
            _this4.enemyMissiles.splice(deadWeapon, 1);
            _this4.score += 25 * _this4.level;
            weapon.explode(_this4);
          }
        });
      });
    }
  }, {
    key: 'detectCollisions',
    value: function detectCollisions() {
      var _this5 = this;

      var targets = [this.cities, this.batteries, this.explosions];
      var weapons = [this.playerMissiles, this.enemyMissiles];

      weapons.forEach(function (array) {
        return _this5.objectiveDetection(array);
      });
      targets.forEach(function (array) {
        return _this5.explosionDetection(array);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, width, height, color) {
    var dx = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var dy = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var dv = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    this.dv = dv;
  }

  _createClass(GamePiece, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return !(this.x + this.width < object.x || this.x > object.x + object.width || this.y + this.height < object.y || this.y > object.y + object.height);
    }
  }, {
    key: "move",
    value: function move() {
      var xAmount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.dx;
      var yAmount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dy;

      this.x += xAmount * this.dv;
      this.y += yAmount * this.dv;
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/Target.js":
/*!***********************!*\
  !*** ./lib/Target.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Target, _GamePiece);

  function Target(x, y, width, height, color, dx, dy, dv) {
    var isExplosion = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
    var radius = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;

    _classCallCheck(this, Target);

    var _this = _possibleConstructorReturn(this, (Target.__proto__ || Object.getPrototypeOf(Target)).call(this, x, y, width, height, color, dx, dy, dv));

    _this.count = 60;
    _this.radius = radius;
    _this.isExplosion = isExplosion;
    return _this;
  }

  _createClass(Target, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          isExplosion = this.isExplosion,
          radius = this.radius,
          color = this.color,
          width = this.width,
          height = this.height;


      if (!isExplosion) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.fillRect(x, y, width, height);
      } else {
        ctx.fillStyle = 'rgb(255, 100, 0)';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
      }
    }
  }]);

  return Target;
}(GamePiece);

/***/ }),

/***/ "./lib/Weapon.js":
/*!***********************!*\
  !*** ./lib/Weapon.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");
var Target = __webpack_require__(/*! ./Target.js */ "./lib/Target.js");

module.exports = function (_GamePiece) {
  _inherits(Weapon, _GamePiece);

  function Weapon(x, y, width, height, color, dx, dy) {
    var dv = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0.5;
    var p1 = arguments[8];
    var p2 = arguments[9];
    var speed = arguments[10];
    var isMissile = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : false;

    _classCallCheck(this, Weapon);

    var _this = _possibleConstructorReturn(this, (Weapon.__proto__ || Object.getPrototypeOf(Weapon)).call(this, x, y, width, height, color, dx, dy, dv = 0.5));

    _this.dv = dv;
    _this.p1 = p1;
    _this.p2 = p2;
    _this.speed = speed;
    _this.isMissile = isMissile;
    _this.angle = Math.atan2(_this.p2.y - _this.p1.y, _this.p2.x - _this.p1.x) * 180 / Math.PI;
    _this.radians = _this.angle * Math.PI / 180;
    _this.xunits = Math.cos(_this.radians) * _this.speed;
    _this.yunits = Math.sin(_this.radians) * _this.speed;
    _this.tail = [];
    return _this;
  }

  _createClass(Weapon, [{
    key: 'missileTail',
    value: function missileTail() {
      var x = this.x,
          y = this.y,
          width = this.width,
          height = this.height,
          color = this.color,
          tail = this.tail;

      var segment = new Weapon(x, y, width, height, color, 0, 0, 0, {}, {}, 0, true);

      tail.push(segment);
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          color = this.color;


      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();
      this.tail.forEach(function (segment) {
        return segment.draw(ctx);
      });
    }
  }, {
    key: 'move',
    value: function move() {
      _get(Weapon.prototype.__proto__ || Object.getPrototypeOf(Weapon.prototype), 'move', this).call(this);
      if (this.isMissile) {
        this.x += this.xunits;
        this.y += this.yunits;
      }
    }
  }, {
    key: 'explode',
    value: function explode(game) {
      var explosion = new Target(this.x, this.y, 30, 30, 'rgb(255, 100, 0)', 0, 0, 0, true, 25);

      game.explosions.push(explosion);
    }
  }]);

  return Weapon;
}(GamePiece);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var highScoreInput = document.querySelector('.highscore');
var highscorePlayerName = document.querySelector('input');
var start = document.querySelector('.start-btn');
var title = document.querySelector('.title');
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");
var game = new Game();

window.addEventListener('load', game.getCurrentHighScore());

canvas.addEventListener('click', function (event) {
  game.playerShoot(event);
});

document.addEventListener('keyup', function (event) {
  if (event.keyCode === 80) {
    //press P
    game.togglePause();
  }
});

highScoreInput.addEventListener('submit', function (event) {
  event.preventDefault();
  game.setHighScore(highscorePlayerName);
  highScoreInput.style.display = 'none';
});

start.addEventListener('click', function () {
  if (highScoreInput.style.display === 'block') {
    return false;
  }
  game.isGameOver = false;
  game.newGame(context);
  start.style.display = 'none';
  title.style.display = 'none';
});

requestAnimationFrame(function update() {
  game.gameLoop(highScoreInput, start, context, canvas);
  requestAnimationFrame(update);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhdHRlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL2xpYi9XZWFwb24uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRhcmdldCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiZHgiLCJkeSIsImR2IiwiaXNFeHBsb3Npb24iLCJjb3VudCIsIm1pc3NpbGVDb3VudCIsIkJhdHRlcnkiLCJXZWFwb24iLCJwbGF5ZXJNaXNzaWxlcyIsImVuZW15TWlzc2lsZXMiLCJ0YXJnZXRzIiwiZXhwbG9zaW9ucyIsImNpdGllcyIsImJhdHRlcmllcyIsImxldmVsIiwiZW5lbXlXZWFwb25Db3VudCIsInBsYXllck1pc3NpbGVDb3VudCIsInNjb3JlIiwiaGlnaFNjb3JlIiwicGxheWVyTmFtZSIsInBhdXNlZCIsIm5leHRMZXZlbCIsImlzR2FtZU92ZXIiLCJuZXh0R2FtZVRpbWVyIiwiaGlnaFNjb3JlSW5wdXQiLCJzdGFydCIsImN0eCIsImMiLCJwYXVzZSIsImNsZWFyUmVjdCIsImFuaW1hdGVNaXNzaWxlcyIsImRldGVjdENvbGxpc2lvbnMiLCJkcmF3T2JqZWN0cyIsImxlbmd0aCIsImluZGljYXRlTmV4dExldmVsIiwibmV3R2FtZSIsImhhbmRsZUdhbWVPdmVyIiwiZmlsbFN0eWxlIiwiZm9udCIsImZpbGxUZXh0IiwiZXVyZWthIiwic2FuRnJhbmNpc2NvIiwic2FuTHVpc09iaXNwbyIsInNhbnRhQmFyYmFyYSIsImxvc0FuZ2VsYXMiLCJzYW5EaWVnbyIsImJhdHRlcnkxIiwiYmF0dGVyeTIiLCJiYXR0ZXJ5MyIsInNldFBsYXllck1pc3NpbGVDb3VudCIsImVuZW15U2hvb3QiLCJkcmF3U2NvcmUiLCJpbnB1dCIsImJ1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiYmF0dGVyeSIsIm5hbWUiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY3VycmVudEhpZ2giLCJwYXJzZSIsImdldEl0ZW0iLCJiYXR0ZXJ5Q291bnRzIiwieFBvcyIsImZvckVhY2giLCJiYXRDb3VudCIsInJlY3QiLCJmaWxsIiwidG9VcHBlckNhc2UiLCJldmVudCIsImJhdHRlcnlYcG9zaXRpb25zIiwibWFwIiwiTWF0aCIsImFicyIsImxheWVyWCIsImNsb3Nlc3RCYXR0ZXJ5IiwiaW5kZXhPZiIsIm1pbiIsInZhbGlkQmF0dGVyeSIsImJhdHRlcnlQb3MiLCJmaW5kQmF0dGVyeSIsIm1vdXNlUG9zIiwibGF5ZXJZIiwibWlzc2lsZVRhcmdldCIsImNvdW50ZXJNaXNzaWxlIiwicHVzaCIsInAxIiwic3BsaWNlIiwic3BlZWQiLCJpIiwicGxheWVyVGFyZ2V0cyIsImVuZW15UG9zMSIsInJhbmRvbVBvcyIsImVuZW15UG9zMiIsImVuZW15TWlzc2lsZSIsIm1heCIsIm1pbmltdW0iLCJjZWlsIiwibWF4aW11bSIsImZsb29yIiwicmFuZG9tIiwidGVycmFpbiIsImdhbWVBcnJheXMiLCJkcmF3IiwiZHJhd0JhdHRlcnlDb3VudCIsImFycmF5Iiwib2JqIiwic2hpZnQiLCJtaXNzaWxlIiwibWlzc2lsZVRhaWwiLCJtb3ZlIiwid2VhcG9ucyIsIndlYXBvbiIsInBvc0RpZmZZIiwicDIiLCJkZWFkV2VhcG9uIiwiZXhwbG9kZSIsImh5cG9EaWZmIiwiaHlwb3QiLCJvYmplY3QiLCJkZWFkVGFyZ2V0IiwiaXNDb2xsaWRpbmdXaXRoIiwicmFkaXVzIiwib2JqZWN0aXZlRGV0ZWN0aW9uIiwiZXhwbG9zaW9uRGV0ZWN0aW9uIiwieEFtb3VudCIsInlBbW91bnQiLCJHYW1lUGllY2UiLCJiZWdpblBhdGgiLCJmaWxsUmVjdCIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwiaXNNaXNzaWxlIiwiYW5nbGUiLCJhdGFuMiIsInJhZGlhbnMiLCJ4dW5pdHMiLCJjb3MiLCJ5dW5pdHMiLCJzaW4iLCJ0YWlsIiwic2VnbWVudCIsImdhbWUiLCJleHBsb3Npb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoaWdoc2NvcmVQbGF5ZXJOYW1lIiwidGl0bGUiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIkdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0Q3VycmVudEhpZ2hTY29yZSIsInBsYXllclNob290Iiwia2V5Q29kZSIsInRvZ2dsZVBhdXNlIiwicHJldmVudERlZmF1bHQiLCJzZXRIaWdoU2NvcmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJnYW1lTG9vcCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7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QWlDLE9BQXJDLEVBQThDO0FBQzVDLFdBQU8sS0FBUDtBQUNEO0FBQ0Q4RixPQUFLL0gsVUFBTCxHQUFrQixLQUFsQjtBQUNBK0gsT0FBS2xILE9BQUwsQ0FBYXlILE9BQWI7QUFDQW5JLFFBQU02QixLQUFOLENBQVlDLE9BQVosR0FBc0IsTUFBdEI7QUFDQW1HLFFBQU1wRyxLQUFOLENBQVlDLE9BQVosR0FBc0IsTUFBdEI7QUFDRCxDQVJEOztBQVVBZ0gsc0JBQXNCLFNBQVNDLE1BQVQsR0FBa0I7QUFDdENuQixPQUFLb0IsUUFBTCxDQUFjakosY0FBZCxFQUE4QkMsS0FBOUIsRUFBcUNtSSxPQUFyQyxFQUE4Q0QsTUFBOUM7QUFDQVksd0JBQXNCQyxNQUF0QjtBQUNELENBSEQsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgVGFyZ2V0ID0gcmVxdWlyZSgnLi9UYXJnZXQuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBCYXR0ZXJ5IGV4dGVuZHMgVGFyZ2V0IHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4LCBkeSwgZHYsIGlzRXhwbG9zaW9uID0gZmFsc2UpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiwgaXNFeHBsb3Npb24gPSBmYWxzZSk7XG4gICAgdGhpcy5jb3VudCA9IG51bGw7XG4gICAgdGhpcy5pc0V4cGxvc2lvbiA9IGlzRXhwbG9zaW9uO1xuICAgIHRoaXMubWlzc2lsZUNvdW50ID0gMTA7XG4gIH1cbn07IiwiY29uc3QgQmF0dGVyeSA9IHJlcXVpcmUoJy4vQmF0dGVyeS5qcycpO1xuY29uc3QgVGFyZ2V0ID0gcmVxdWlyZSgnLi9UYXJnZXQuanMnKTtcbmNvbnN0IFdlYXBvbiA9IHJlcXVpcmUoJy4vV2VhcG9uLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVyTWlzc2lsZXMgPSBbXTtcbiAgICB0aGlzLmVuZW15TWlzc2lsZXMgPSBbXTtcbiAgICB0aGlzLnRhcmdldHMgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcbiAgICB0aGlzLmNpdGllcyA9IFtdO1xuICAgIHRoaXMuYmF0dGVyaWVzID0gW107XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgdGhpcy5lbmVteVdlYXBvbkNvdW50ID0gMTA7XG4gICAgdGhpcy5wbGF5ZXJNaXNzaWxlQ291bnQ7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSB7cGxheWVyTmFtZTogJ1RDSycsIGxldmVsOiAwLCBzY29yZTogMH07XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5leHRMZXZlbCA9IGZhbHNlO1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMubmV4dEdhbWVUaW1lciA9IDI0MDtcbiAgfVxuXG4gIGdhbWVMb29wKGhpZ2hTY29yZUlucHV0LCBzdGFydCwgY3R4LCBjKSB7XG4gICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICB0aGlzLnBhdXNlKGN0eCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIXRoaXMubmV4dExldmVsICYmICF0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZU1pc3NpbGVzKHRoaXMucGxheWVyTWlzc2lsZXMsIGN0eCk7XG4gICAgICB0aGlzLmFuaW1hdGVNaXNzaWxlcyh0aGlzLmVuZW15TWlzc2lsZXMsIGN0eCk7XG4gICAgICB0aGlzLmRldGVjdENvbGxpc2lvbnMoKTtcbiAgICAgIHRoaXMuZHJhd09iamVjdHMoY3R4KTtcbiAgICAgIGlmICh0aGlzLmVuZW15TWlzc2lsZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aGlzLmNpdGllcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB0aGlzLm5leHRMZXZlbCA9IHRydWVcbiAgICAgICAgICA6IHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dExldmVsKSB7XG4gICAgICBpZiAodGhpcy5uZXh0R2FtZVRpbWVyICE9PSAwKSB7XG4gICAgICAgIHRoaXMuZHJhd09iamVjdHMoY3R4KTtcbiAgICAgICAgdGhpcy5pbmRpY2F0ZU5leHRMZXZlbChjdHgpO1xuICAgICAgICB0aGlzLm5leHRHYW1lVGltZXItLTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGV2ZWwrKztcbiAgICAgICAgdGhpcy5uZXdHYW1lKCk7XG4gICAgICAgIHRoaXMubmV4dEdhbWVUaW1lciA9IDI0MDtcbiAgICAgICAgdGhpcy5uZXh0TGV2ZWwgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcihjdHgsIGhpZ2hTY29yZUlucHV0LCBzdGFydCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cblxuICBwYXVzZShjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDAsIDApJztcbiAgICBjdHguZm9udCA9ICc0OHB4IHNlcmlmJztcbiAgICBjdHguZmlsbFRleHQoJ1BBVVNFRCcsIDIxMCwgMzAwKTtcbiAgfVxuXG4gIG5ld0dhbWUoKSB7XG4gICAgY29uc3QgZXVyZWthID0gbmV3IFRhcmdldCg2MCwgNTA1LCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IHNhbkZyYW5jaXNjbyA9IG5ldyBUYXJnZXQoMTM1LCA1MTAsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3Qgc2FuTHVpc09iaXNwbyA9IG5ldyBUYXJnZXQoMjEwLCA1MTUsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3Qgc2FudGFCYXJiYXJhID0gbmV3IFRhcmdldCgzNjAsIDUxMCwgNDAsIDMwLCAncmdiKDAsIDIwMCwgMjAwKScsIGZhbHNlKTtcbiAgICBjb25zdCBsb3NBbmdlbGFzID0gbmV3IFRhcmdldCg0MzAsIDUwMCwgNDAsIDMwLCAncmdiKDAsIDIwMCwgMjAwKScsIGZhbHNlKTtcbiAgICBjb25zdCBzYW5EaWVnbyA9IG5ldyBUYXJnZXQoNTAwLCA1MTUsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3QgYmF0dGVyeTEgPSBuZXcgQmF0dGVyeSgwLCA0OTAsIDYwLCA2MCwgJ3JnYigyMDAsIDIwMCwgMCknLCBmYWxzZSwgMTApO1xuICAgIGNvbnN0IGJhdHRlcnkyID0gbmV3IEJhdHRlcnkoMjcwLCA0OTAsIDcwLCA2MCwgJ3JnYigyMDAsIDIwMCwgMCknLCBmYWxzZSwgMTApO1xuICAgIGNvbnN0IGJhdHRlcnkzID0gbmV3IEJhdHRlcnkoNTQwLCA0OTAsIDYwLCA2MCwgJ3JnYigyMDAsIDIwMCwgMCknLCBmYWxzZSwgMTApO1xuICAgIFxuICAgIGlmICh0aGlzLmxldmVsID09PSAxKSB7XG4gICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgIHRoaXMuY2l0aWVzID0gW2V1cmVrYSwgc2FuRnJhbmNpc2NvLCBzYW5MdWlzT2Jpc3BvLCBzYW50YUJhcmJhcmEsIGxvc0FuZ2VsYXMsIHNhbkRpZWdvXTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgIHRoaXMuc2NvcmUgKz0gKHRoaXMucGxheWVyTWlzc2lsZUNvdW50ICogNSk7XG4gICAgfVxuICAgIHRoaXMuYmF0dGVyaWVzID0gW2JhdHRlcnkxLCBiYXR0ZXJ5MiwgYmF0dGVyeTNdO1xuICAgIHRoaXMuc2V0UGxheWVyTWlzc2lsZUNvdW50KCk7XG4gICAgdGhpcy5lbmVteVNob290KCk7XG4gIH1cblxuICBpbmRpY2F0ZU5leHRMZXZlbChjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDAsIDApJztcbiAgICBjdHguZm9udCA9ICc0OHB4IHNlcmlmJztcbiAgICBjdHguZmlsbFRleHQoYElOQ09NSU5HYCwgMTgwLCAzMDApO1xuICAgIHRoaXMuZHJhd1Njb3JlKGN0eCk7XG4gIH1cblxuICBoYW5kbGVHYW1lT3ZlcihjdHgsIGlucHV0LCBidXR0b24pIHtcbiAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAwLCAwKSc7XG4gICAgY3R4LmZvbnQgPSAnNDhweCBzZXJpZic7XG5cbiAgICBpZiAodGhpcy5oaWdoU2NvcmUuc2NvcmUgPCB0aGlzLnNjb3JlKSB7XG4gICAgICBjdHguZmlsbFRleHQoJ0hJR0ggU0NPUkUhJywgMTUwLCAzMDApO1xuICAgICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjb3JlICE9PSAwKSB7XG4gICAgICB0aGlzLmxldmVsID0gMTtcbiAgICAgIGN0eC5maWxsVGV4dCgnVEhFIEVORCcsIDE5NSwgMzAwKTtcbiAgICB9XG4gIH1cblxuICBzZXRQbGF5ZXJNaXNzaWxlQ291bnQoKSB7XG4gICAgdGhpcy5wbGF5ZXJNaXNzaWxlQ291bnQgPSB0aGlzLmJhdHRlcmllcy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBiYXR0ZXJ5KSA9PiB7XG4gICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBiYXR0ZXJ5Lm1pc3NpbGVDb3VudDtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHNldEhpZ2hTY29yZShuYW1lKSB7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSB7XG4gICAgICBwbGF5ZXJOYW1lOiBuYW1lLnZhbHVlLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBzY29yZTogdGhpcy5zY29yZVxuICAgIH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaHNjb3JlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5oaWdoU2NvcmUpKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRIaWdoU2NvcmUoKSB7XG4gICAgbGV0IGN1cnJlbnRIaWdoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJykpO1xuXG4gICAgaWYgKGN1cnJlbnRIaWdoKSB7XG4gICAgICB0aGlzLmhpZ2hTY29yZSA9IGN1cnJlbnRIaWdoO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdCYXR0ZXJ5Q291bnQoY3R4KSB7XG4gICAgY29uc3QgYmF0dGVyeUNvdW50cyA9IFtcbiAgICAgIHsgY291bnQ6ICdPVVQnLCB4OiAwLCB4UG9zOiAxMCB9LCBcbiAgICAgIHsgY291bnQ6ICdPVVQnLCB4OiAyNzAsIHhQb3M6IDI4NSB9LCBcbiAgICAgIHsgY291bnQ6ICdPVVQnLCB4OiA1NDAsIHhQb3M6IDU1MCB9ICBcbiAgICBdO1xuICAgIFxuICAgIGlmICh0aGlzLmJhdHRlcmllcy5sZW5ndGggIT09IDApIHtcbiAgICAgIGJhdHRlcnlDb3VudHMuZm9yRWFjaCgoYmF0Q291bnQpID0+IHsgXG4gICAgICAgIHRoaXMuYmF0dGVyaWVzLmZvckVhY2goKGJhdHRlcnkpID0+IHsgXG4gICAgICAgICAgaWYgKGJhdHRlcnkueCA9PT0gYmF0Q291bnQueCkge1xuICAgICAgICAgICAgcmV0dXJuIGJhdENvdW50LmNvdW50ID0gYmF0dGVyeS5taXNzaWxlQ291bnQ7IFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwgMjAwLCAyMDApJztcbiAgICBjdHguZm9udCA9ICcyMHB4IHNhbnMtc2VyaWYnO1xuICAgIGJhdHRlcnlDb3VudHMuZm9yRWFjaChjb3VudCA9PiBjdHguZmlsbFRleHQoY291bnQuY291bnQsIGNvdW50LnhQb3MgKyA2LCA1NzApKTtcbiAgfVxuXG4gIGRyYXdTY29yZShjdHgpIHtcbiAgICBjdHguZm9udCA9ICcxOHB4IHNhbnMtc2VyaWYnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDUsIDMyLCA3OCknO1xuICAgIGN0eC5yZWN0KDAsIDAsIDYwMCwgNDApO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAyNTUsIDI1NSknO1xuICAgIGN0eC5maWxsVGV4dChgc2NvcmU6ICR7dGhpcy5zY29yZX1gLCAzMCwgMjgpO1xuICAgIGN0eC5maWxsVGV4dChgaGlnaCBzY29yZTogJHt0aGlzLmhpZ2hTY29yZS5wbGF5ZXJOYW1lLnRvVXBwZXJDYXNlKCl9ICR7dGhpcy5oaWdoU2NvcmUuc2NvcmV9YCwgMzIwLCAyOCk7XG4gIH1cblxuICBmaW5kQmF0dGVyeShldmVudCkge1xuICAgIGNvbnN0IHsgYmF0dGVyaWVzIH0gPSB0aGlzO1xuICAgIGxldCBiYXR0ZXJ5WHBvc2l0aW9ucyA9IGJhdHRlcmllcy5tYXAoYmF0dGVyeSA9PiBNYXRoLmFicyhiYXR0ZXJ5LnggLSBldmVudC5sYXllclgpKTtcbiAgICBsZXQgY2xvc2VzdEJhdHRlcnkgPSBiYXR0ZXJ5WHBvc2l0aW9ucy5pbmRleE9mKE1hdGgubWluKC4uLmJhdHRlcnlYcG9zaXRpb25zKSk7XG4gICAgbGV0IHZhbGlkQmF0dGVyeSA9IGJhdHRlcmllc1tjbG9zZXN0QmF0dGVyeV07XG4gICAgbGV0IHhQb3MgPSB2YWxpZEJhdHRlcnkueCArIDMwO1xuXG4gICAgcmV0dXJuIHt4OiB4UG9zLCB5OiA0OTB9O1xuICB9XG5cbiAgcGxheWVyU2hvb3QoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBiYXR0ZXJpZXMsIHRhcmdldHMsIHBsYXllck1pc3NpbGVzIH0gPSB0aGlzO1xuICAgIGNvbnN0IGJhdHRlcnlQb3MgPSB0aGlzLmZpbmRCYXR0ZXJ5KGV2ZW50KTtcbiAgICBjb25zdCBtb3VzZVBvcyA9IHt4OiBldmVudC5sYXllclgsIHk6IGV2ZW50LmxheWVyWX07XG4gICAgY29uc3QgbWlzc2lsZVRhcmdldCA9IG5ldyBUYXJnZXQobW91c2VQb3MueCwgbW91c2VQb3MueSwgMTAsIDEwLCAncmdiKDIwMCwgMjUwLCAyNSknLCAwLCAwKTtcbiAgXG4gICAgbW91c2VQb3MueSA+IDQzOCBcbiAgICAgID8gbWlzc2lsZVRhcmdldC55ID0gNDM1IFxuICAgICAgOiBldmVudC5sYXllclk7XG4gICAgXG4gICAgY29uc3QgY291bnRlck1pc3NpbGUgPSBuZXcgV2VhcG9uKGJhdHRlcnlQb3MueCwgNDkwLCA1LCA1LCAncmdiKDAsIDIwMCwgMjAwKScsIDAsIDAsIDEyLCBiYXR0ZXJ5UG9zLCB7IHg6IG1vdXNlUG9zLnggKyA1LCB5OiBtaXNzaWxlVGFyZ2V0LnkgKyA1fSwgMTAsIHRydWUpO1xuICBcbiAgICB0YXJnZXRzLnB1c2gobWlzc2lsZVRhcmdldCk7XG4gICAgcGxheWVyTWlzc2lsZXMucHVzaChjb3VudGVyTWlzc2lsZSk7XG5cbiAgICBiYXR0ZXJpZXMuZm9yRWFjaChiYXR0ZXJ5ID0+IHtcbiAgICAgIGlmIChiYXR0ZXJ5LnggPT09IGNvdW50ZXJNaXNzaWxlLnAxLnggLSAzMCkge1xuICAgICAgICBiYXR0ZXJ5Lm1pc3NpbGVDb3VudCAtPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGJhdHRlcnkubWlzc2lsZUNvdW50ID09PSAwKSB7XG4gICAgICAgIGJhdHRlcmllcy5zcGxpY2UoYmF0dGVyaWVzLmluZGV4T2YoYmF0dGVyeSksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2V0UGxheWVyTWlzc2lsZUNvdW50KCk7XG4gIH1cblxuICBlbmVteVNob290KCkge1xuICAgIGNvbnN0IHtlbmVteVdlYXBvbkNvdW50LCBlbmVteU1pc3NpbGVzfSA9IHRoaXM7XG4gICAgbGV0IHNwZWVkID0gdGhpcy5sZXZlbCAqIDAuNTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW5lbXlXZWFwb25Db3VudCAqIHRoaXMubGV2ZWw7IGkrKykge1xuICAgICAgY29uc3QgcGxheWVyVGFyZ2V0cyA9IFs2MCwgMTM1LCAyMTAsIDM2MCwgNDMwLCA1MDAsIDAsIDI3MCwgNTQwXTtcbiAgICAgIGNvbnN0IGVuZW15UG9zMSA9IHsgeDogcmFuZG9tUG9zKDEwLCA1OTApLCB5OiByYW5kb21Qb3MoLTUwMCwgLTEwMCkgfTtcbiAgICAgIGNvbnN0IGVuZW15UG9zMiA9IHsgeDogcGxheWVyVGFyZ2V0c1sgcmFuZG9tUG9zKDAsIDgpIF0gKyAyNSwgeTogNTIwIH07XG4gICAgICBjb25zdCBlbmVteU1pc3NpbGUgPSBcbiAgICAgIG5ldyBXZWFwb24oZW5lbXlQb3MxLngsIGVuZW15UG9zMS55LCA1LCA1LCAncmdiKDI1NSwgMCwgMCknLCAwLCAwLCAwLCBlbmVteVBvczEsIGVuZW15UG9zMiwgc3BlZWQsIHRydWUpO1xuXG4gICAgICBlbmVteU1pc3NpbGVzLnB1c2goZW5lbXlNaXNzaWxlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmFuZG9tUG9zKG1pbiwgbWF4KSB7XG4gICAgICBjb25zdCBtaW5pbXVtID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICBjb25zdCBtYXhpbXVtID0gTWF0aC5mbG9vcihtYXgpO1xuICBcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4aW11bSAtIG1pbmltdW0gKyAxKSkgKyBtaW5pbXVtO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdPYmplY3RzKGN0eCkge1xuICAgIGNvbnN0IHRlcnJhaW4gPSBuZXcgVGFyZ2V0KDAsIDUyMCwgNjAwLCA4MCwgJ3JnYigyNTUsIDI1NSwgMCknLCAwKTtcbiAgICBjb25zdCBnYW1lQXJyYXlzID0gW1xuICAgICAgdGhpcy5iYXR0ZXJpZXMsXG4gICAgICB0aGlzLnRhcmdldHMsXG4gICAgICB0aGlzLmV4cGxvc2lvbnMsXG4gICAgICB0aGlzLnBsYXllck1pc3NpbGVzLFxuICAgICAgdGhpcy5lbmVteU1pc3NpbGVzLFxuICAgICAgdGhpcy5jaXRpZXNcbiAgICBdO1xuXG4gICAgdGVycmFpbi5kcmF3KGN0eCk7XG4gICAgdGhpcy5kcmF3QmF0dGVyeUNvdW50KGN0eCk7XG4gICAgXG4gICAgZ2FtZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IGFycmF5LmZvckVhY2gob2JqID0+IHtcbiAgICAgIG9iai5jb3VudCA9PT0gMCAmJiBvYmouaXNFeHBsb3Npb25cbiAgICAgICAgPyB0aGlzLmV4cGxvc2lvbnMuc2hpZnQob2JqKSBcbiAgICAgICAgOiBvYmouY291bnQtLTtcbiAgICAgIG9iai5kcmF3KGN0eCk7XG4gICAgfSkpO1xuICAgIHRoaXMuZHJhd1Njb3JlKGN0eCk7XG4gIH1cblxuICBhbmltYXRlTWlzc2lsZXMoYXJyYXkpIHtcbiAgICBhcnJheS5mb3JFYWNoKChtaXNzaWxlKSA9PiB7XG4gICAgICBtaXNzaWxlLm1pc3NpbGVUYWlsKCk7XG4gICAgICBtaXNzaWxlLm1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9iamVjdGl2ZURldGVjdGlvbih3ZWFwb25zKSB7XG4gICAgd2VhcG9ucy5mb3JFYWNoKCh3ZWFwb24pID0+IHtcbiAgICAgIGNvbnN0IHBvc0RpZmZZID0gTWF0aC5hYnMod2VhcG9uLnkgLSB3ZWFwb24ucDIueSk7XG4gICAgICBsZXQgZGVhZFdlYXBvbiA9IHdlYXBvbnMuaW5kZXhPZih3ZWFwb24pO1xuXG4gICAgICBpZiAoIHBvc0RpZmZZIDwgNSApIHtcbiAgICAgICAgd2VhcG9ucy5zcGxpY2UoZGVhZFdlYXBvbiwgMSk7XG4gICAgICAgIHRoaXMudGFyZ2V0cy5zcGxpY2UoZGVhZFdlYXBvbiwgMSk7XG4gICAgICAgIHdlYXBvbi5leHBsb2RlKHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZXhwbG9zaW9uRGV0ZWN0aW9uKGFycmF5KSB7XG4gICAgYXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgdGhpcy5lbmVteU1pc3NpbGVzLmZvckVhY2god2VhcG9uID0+IHtcbiAgICAgICAgY29uc3QgaHlwb0RpZmYgPSBNYXRoLmh5cG90KG9iamVjdC54IC0gd2VhcG9uLngsIG9iamVjdC55IC0gd2VhcG9uLnkpO1xuICAgICAgICBjb25zdCBkZWFkV2VhcG9uID0gdGhpcy5lbmVteU1pc3NpbGVzLmluZGV4T2Yod2VhcG9uKTtcbiAgICAgICAgY29uc3QgZGVhZFRhcmdldCA9IGFycmF5LmluZGV4T2Yob2JqZWN0KTtcbiAgICAgICAgXG4gICAgICAgIGlmICggd2VhcG9uLmlzQ29sbGlkaW5nV2l0aChvYmplY3QpIFxuICAgICAgICAgICYmIG9iamVjdC54ID09PSB3ZWFwb24ucDIueCAtIDI1IFxuICAgICAgICAgICYmIHdlYXBvbi55ID4gNTEwICkge1xuICAgICAgICAgIHJldHVybiBhcnJheS5zcGxpY2UoZGVhZFRhcmdldCwgMSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggaHlwb0RpZmYgPCBvYmplY3QucmFkaXVzICkge1xuICAgICAgICAgIHRoaXMuZW5lbXlNaXNzaWxlcy5zcGxpY2UoZGVhZFdlYXBvbiwgMSk7XG4gICAgICAgICAgdGhpcy5zY29yZSArPSAyNSAqIHRoaXMubGV2ZWw7XG4gICAgICAgICAgd2VhcG9uLmV4cGxvZGUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZGV0ZWN0Q29sbGlzaW9ucygpIHtcbiAgICBsZXQgdGFyZ2V0cyA9IFtcbiAgICAgIHRoaXMuY2l0aWVzLFxuICAgICAgdGhpcy5iYXR0ZXJpZXMsXG4gICAgICB0aGlzLmV4cGxvc2lvbnNcbiAgICBdO1xuICAgIGxldCB3ZWFwb25zID0gW1xuICAgICAgdGhpcy5wbGF5ZXJNaXNzaWxlcyxcbiAgICAgIHRoaXMuZW5lbXlNaXNzaWxlc1xuICAgIF07XG5cbiAgICB3ZWFwb25zLmZvckVhY2goYXJyYXkgPT4gdGhpcy5vYmplY3RpdmVEZXRlY3Rpb24oYXJyYXkpKTtcbiAgICB0YXJnZXRzLmZvckVhY2goYXJyYXkgPT4gdGhpcy5leHBsb3Npb25EZXRlY3Rpb24oYXJyYXkpKTtcbiAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCA9IDAsIGR5ID0gMCwgZHYgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5keCA9IGR4OyBcbiAgICB0aGlzLmR5ID0gZHk7IFxuICAgIHRoaXMuZHYgPSBkdjtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gIShcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPCBvYmplY3QueCB8fFxuICAgICAgdGhpcy54ID4gb2JqZWN0LnggKyBvYmplY3Qud2lkdGggfHwgXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA8IG9iamVjdC55IHx8XG4gICAgICB0aGlzLnkgPiBvYmplY3QueSArIG9iamVjdC5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgbW92ZSggeEFtb3VudCA9IHRoaXMuZHgsIHlBbW91bnQgPSB0aGlzLmR5KSB7XG4gICAgdGhpcy54ICs9IHhBbW91bnQgKiB0aGlzLmR2O1xuICAgIHRoaXMueSArPSB5QW1vdW50ICogdGhpcy5kdjtcbiAgfVxuICBcbn07XG5cbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVGFyZ2V0IGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4LCBkeSwgZHYsIGlzRXhwbG9zaW9uID0gZmFsc2UsIHJhZGl1cyA9IDApIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdik7XG4gICAgdGhpcy5jb3VudCA9IDYwO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMuaXNFeHBsb3Npb24gPSBpc0V4cGxvc2lvbjtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBpc0V4cGxvc2lvbiwgcmFkaXVzLCBjb2xvciwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcztcblxuICAgIGlmICghaXNFeHBsb3Npb24pIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAxMDAsIDApJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgfVxuXG59OyIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlLmpzJyk7XG5jb25zdCBUYXJnZXQgPSByZXF1aXJlKCcuL1RhcmdldC5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdlYXBvbiBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2ID0gMC41LCBwMSwgcDIsIHNwZWVkLCBpc01pc3NpbGUgPSBmYWxzZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2ID0gMC41KTtcbiAgICB0aGlzLmR2ID0gZHY7XG4gICAgdGhpcy5wMSA9IHAxO1xuICAgIHRoaXMucDIgPSBwMjtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5pc01pc3NpbGUgPSBpc01pc3NpbGU7XG4gICAgdGhpcy5hbmdsZSA9IE1hdGguYXRhbjIodGhpcy5wMi55IC0gdGhpcy5wMS55LCB0aGlzLnAyLnggLSB0aGlzLnAxLngpICogMTgwIC8gTWF0aC5QSTtcbiAgICB0aGlzLnJhZGlhbnMgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbiAgICB0aGlzLnh1bml0cyA9IE1hdGguY29zKHRoaXMucmFkaWFucykgKiB0aGlzLnNwZWVkO1xuICAgIHRoaXMueXVuaXRzID0gTWF0aC5zaW4odGhpcy5yYWRpYW5zKSAqIHRoaXMuc3BlZWQ7XG4gICAgdGhpcy50YWlsID0gW107XG4gIH1cblxuICBtaXNzaWxlVGFpbCgpIHtcbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCB0YWlsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNlZ21lbnQgPSBcbiAgICBuZXcgV2VhcG9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCAwLCAwLCAwLCB7fSwge30sIDAsIHRydWUpO1xuXG4gICAgdGFpbC5wdXNoKHNlZ21lbnQpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgsIHksIDMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy50YWlsLmZvckVhY2goc2VnbWVudCA9PiBzZWdtZW50LmRyYXcoY3R4KSk7XG4gIH1cbiAgXG4gIG1vdmUoKSB7XG4gICAgc3VwZXIubW92ZSgpO1xuICAgIGlmICh0aGlzLmlzTWlzc2lsZSkge1xuICAgICAgdGhpcy54ICs9IHRoaXMueHVuaXRzO1xuICAgICAgdGhpcy55ICs9IHRoaXMueXVuaXRzO1xuICAgIH1cbiAgfVxuXG4gIGV4cGxvZGUoZ2FtZSkge1xuICAgIGNvbnN0IGV4cGxvc2lvbiA9IFxuICAgIG5ldyBUYXJnZXQodGhpcy54LCB0aGlzLnksIDMwLCAzMCwgJ3JnYigyNTUsIDEwMCwgMCknLCAwLCAwLCAwLCB0cnVlLCAyNSk7XG4gICAgXG4gICAgZ2FtZS5leHBsb3Npb25zLnB1c2goZXhwbG9zaW9uKTtcbiAgfVxuXG59OyIsImNvbnN0IGhpZ2hTY29yZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hzY29yZScpO1xuY29uc3QgaGlnaHNjb3JlUGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idG4nKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZ2FtZS5nZXRDdXJyZW50SGlnaFNjb3JlKCkpO1xuXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICBnYW1lLnBsYXllclNob290KGV2ZW50KTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSA4MCkgeyAvL3ByZXNzIFBcbiAgICBnYW1lLnRvZ2dsZVBhdXNlKCk7XG4gIH1cbn0pO1xuXG5oaWdoU2NvcmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBnYW1lLnNldEhpZ2hTY29yZShoaWdoc2NvcmVQbGF5ZXJOYW1lKTtcbiAgaGlnaFNjb3JlSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5zdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBpZiAoaGlnaFNjb3JlSW5wdXQuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBnYW1lLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgZ2FtZS5uZXdHYW1lKGNvbnRleHQpO1xuICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiB1cGRhdGUoKSB7XG4gIGdhbWUuZ2FtZUxvb3AoaGlnaFNjb3JlSW5wdXQsIHN0YXJ0LCBjb250ZXh0LCBjYW52YXMpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9