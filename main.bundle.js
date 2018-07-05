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

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");
var Battery = __webpack_require__(/*! ./Battery.js */ "./lib/Battery.js");
var Target = __webpack_require__(/*! ./Target.js */ "./lib/Target.js");
var Weapon = __webpack_require__(/*! ./Weapon.js */ "./lib/Weapon.js");

module.exports = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.missiles = [];
    this.enemyMissiles = [];
    this.targets = [];
    this.explosions = [];
    this.cities = [];
    this.batteries = [];
    this.lvl = 1;
    this.enemyWeaponCount = this.lvl * 5;
    this.playerMissileCount;
    this.isGameOver = false;
    this.score = 0;
    this.highScore = { playerName: 'TCK', level: 1, score: 0 };
    this.paused = false;
  }

  _createClass(Game, [{
    key: 'gameLoop',
    value: function gameLoop(highScoreInput, start, ctx) {
      if (this.isGameOver) {
        this.gameOver(ctx, highScoreInput, start);
      } else {
        this.drawObjects(ctx);
        this.animateMissiles(this.missiles, ctx);
        this.animateMissiles(this.enemyMissiles, ctx);
        this.detectCollisions();
        this.drawText(ctx);
      }

      if (this.cities.length === 0 && this.enemyMissiles.length === 0) {
        this.isGameOver = true;
      } else if (this.cities.length !== 0 && this.enemyMissiles.length === 0) {
        this.lvl++;
        this.newGame();
        this.enemyShoot();
      }
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
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

      if (this.lvl === 1) {
        this.score = 0;
        this.cities = [eureka, sanFrancisco, sanLuisObispo, santaBarbara, losAngelas, sanDiego];
      } else if (this.cities !== 0) {
        this.score += this.playerMissileCount * 5;
        this.enemyTargets = [];
      }
      this.batteries = [battery1, battery2, battery3];
      this.setPlayerMissileCount();
      this.enemyShoot();
    }
  }, {
    key: 'setPlayerMissileCount',
    value: function setPlayerMissileCount() {
      this.playerMissileCount = this.batteries.reduce(function (accumulator, battery) {
        return accumulator + battery.missileCount;
      }, 0);
    }
  }, {
    key: 'gameOver',
    value: function gameOver(ctx, input, button) {
      button.style.display = "block";
      ctx.fillStyle = 'rgb(255, 0, 0)';
      ctx.font = '48px serif';

      if (this.highScore.score < this.score) {
        ctx.fillText('HIGH SCORE!', 150, 300);
        input.style.display = "block";
      } else if (this.score !== 0) {
        this.lvl = 1;
        ctx.fillText('THE END', 195, 300);
      }
    }
  }, {
    key: 'setHighScore',
    value: function setHighScore(name) {
      this.highScore = {
        playerName: name.value,
        level: this.lvl,
        score: this.score
      };

      localStorage.setItem('highscore', JSON.stringify(this.highScore));
    }
  }, {
    key: 'currentHighScore',
    value: function currentHighScore() {
      this.highScore = JSON.parse(localStorage.getItem('highscore'));
    }
  }, {
    key: 'drawText',
    value: function drawText(ctx) {
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
      this.drawScore(ctx);
    }
  }, {
    key: 'drawScore',
    value: function drawScore(ctx) {
      ctx.font = '18px sans-serif';
      ctx.fillStyle = 'rgb(5, 32, 78)';
      ctx.rect(0, 0, 600, 40);
      ctx.fill();
      ctx.fillStyle = 'rgb(255, 255, 255)';
      ctx.fillText('level: ' + this.lvl, 30, 28);
      ctx.fillText('score: ' + this.score, 120, 28);
      ctx.fillText('high score: ' + this.highScore.playerName + ' | ' + this.highScore.score, 320, 28);
    }
  }, {
    key: 'generateTerrain',
    value: function generateTerrain(ctx) {
      var terrain = new GamePiece(0, 520, 600, 80, 'rgb(255, 255, 0)', 0);

      terrain.draw(ctx);
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
    key: 'shoot',
    value: function shoot(event) {
      var batteries = this.batteries,
          targets = this.targets,
          missiles = this.missiles;

      var batteryPos = this.findBattery(event);
      var mousePos = { x: event.layerX, y: event.layerY };
      var missileTarget = new Target(mousePos.x, mousePos.y, 10, 10, 'rgb(200, 250, 25)', 0, 0);

      mousePos.y > 438 ? missileTarget.y = 435 : event.layerY;

      var counterMissile = new Weapon(batteryPos.x, 490, 5, 5, 'rgb(0, 200, 200)', 0, 0, 12, batteryPos, { x: mousePos.x + 5, y: missileTarget.y + 5 }, 10, true);

      targets.push(missileTarget);
      missiles.push(counterMissile);

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
    key: 'randomPos',
    value: function randomPos(min, max) {
      var minimum = Math.ceil(min);
      var maximum = Math.floor(max);

      return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }
  }, {
    key: 'enemyShoot',
    value: function enemyShoot() {
      var enemyWeaponCount = this.enemyWeaponCount,
          enemyMissiles = this.enemyMissiles,
          randomPos = this.randomPos;


      for (var i = 0; i < enemyWeaponCount; i++) {
        var playerTargets = [60, 135, 210, 360, 430, 500, 0, 270, 540];
        var enemyPos1 = { x: randomPos(10, 590), y: randomPos(-500, -100) };
        var enemyPos2 = { x: playerTargets[randomPos(0, 8)] + 25, y: 520 };
        var enemyMissile = new Weapon(enemyPos1.x, enemyPos1.y, 5, 5, 'rgb(255, 0, 0)', 0, 0, 0, enemyPos1, enemyPos2, 1, true);

        enemyMissiles.push(enemyMissile);
      }
    }
  }, {
    key: 'explode',
    value: function explode(weapon) {
      var explosion = new Target(weapon.x, weapon.y, 30, 30, 'rgb(255, 100, 0)', 0, 0, 0, true, 25);

      this.explosions.push(explosion);
    }
  }, {
    key: 'drawObjects',
    value: function drawObjects(ctx) {
      var _this2 = this;

      var gameArrays = [this.enemyMissiles, this.explosions, this.batteries, this.missiles, this.targets, this.cities];

      this.generateTerrain(ctx);

      gameArrays.forEach(function (array) {
        return array.forEach(function (obj) {
          obj.count === 0 && obj.isExplosion === true ? _this2.explosions.shift(obj) : obj.count-- && obj.draw(ctx);
        });
      });
    }
  }, {
    key: 'animateMissiles',
    value: function animateMissiles(array, ctx) {
      var _this3 = this;

      array.forEach(function (missile) {
        missile.missileTail();
        missile.move();
        missile.draw(ctx);
        missile.tail.forEach(function (seg) {
          return seg.draw(ctx);
        });
        _this3.objectiveDetection(array);
      });
    }
  }, {
    key: 'objectiveDetection',
    value: function objectiveDetection(weapons) {
      var _this4 = this;

      weapons.forEach(function (weapon) {
        var posDiffY = Math.abs(weapon.y - weapon.p2.y);
        var deadWeapon = weapons.indexOf(weapon);

        if (posDiffY < 5) {
          weapons.splice(deadWeapon, 1);
          _this4.targets.splice(weapons.findIndex(function (index) {
            return index;
          }), 1);
          _this4.explode(weapon);
        }
      });
    }
  }, {
    key: 'explosionDetection',
    value: function explosionDetection(targets) {
      var _this5 = this;

      targets.forEach(function (target) {
        _this5.enemyMissiles.forEach(function (weapon) {
          var hypoDiff = Math.hypot(target.x - weapon.x, target.y - weapon.y);
          var deadWeapon = _this5.enemyMissiles.indexOf(weapon);
          var deadTarget = targets.indexOf(target);

          if (weapon.isCollidingWith(target) && target.x === weapon.p2.x - 25 && weapon.y > 510) {
            return targets.splice(deadTarget, 1);
          } else if (hypoDiff < target.radius) {
            _this5.explode(weapon);
            _this5.enemyMissiles.splice(deadWeapon, 1);
            _this5.score += 25 * _this5.lvl;
          }
        });
      });
    }
  }, {
    key: 'detectCollisions',
    value: function detectCollisions() {
      var _this6 = this;

      var detectArrays = [this.cities, this.batteries, this.explosions];

      detectArrays.forEach(function (array) {
        return _this6.explosionDetection(array);
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
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          width = this.width,
          height = this.height,
          color = this.color;


      if ((this.isMissile || this.isExplosion) !== true) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.fillRect(x, y, width, height);
      }
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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

    _this.count = 80;
    _this.radius = radius;
    _this.isExplosion = isExplosion;
    return _this;
  }

  _createClass(Target, [{
    key: 'draw',
    value: function draw(ctx) {
      _get(Target.prototype.__proto__ || Object.getPrototypeOf(Target.prototype), 'draw', this).call(this, ctx);
      var x = this.x,
          y = this.y,
          isExplosion = this.isExplosion,
          radius = this.radius;


      if (isExplosion === true) {
        ctx.fillStyle = 'rgb(255, 100, 0)';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
        return;
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
    // angle in degrees
    _this.angle = Math.atan2(_this.p2.y - _this.p1.y, _this.p2.x - _this.p1.x) * 180 / Math.PI;
    // angle in radians
    _this.radians = _this.angle * Math.PI / 180;
    //How many moves to make each redraw
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


      var segment = new GamePiece(x - 3, y - 3, width, height, color, 0, 0, 0);

      tail.push(segment);
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      _get(Weapon.prototype.__proto__ || Object.getPrototypeOf(Weapon.prototype), 'draw', this).call(this, ctx);
      var x = this.x,
          y = this.y,
          color = this.color,
          isMissile = this.isMissile;


      if (isMissile === true) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        return;
      }
    }
  }, {
    key: 'move',
    value: function move() {
      _get(Weapon.prototype.__proto__ || Object.getPrototypeOf(Weapon.prototype), 'move', this).call(this);
      // this.currentPos = {x:Math.round(this.x), y:Math.round(this.y)};
      if (this.isMissile === true) {
        this.x += this.xunits;
        this.y += this.yunits;
        return;
      }
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
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");
var game = new Game();

window.addEventListener('load', game.currentHighScore());

canvas.addEventListener('click', function (e) {
  game.shoot(e);
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 80) {
    game.togglePause();
  }
});

highScoreInput.addEventListener('submit', function (e) {
  e.preventDefault();
  game.setHighScore(highscorePlayerName);
  highScoreInput.style.display = "none";
});

start.addEventListener('click', function (e) {
  e.preventDefault();
  game.isGameOver = false;
  game.newGame();
  start.style.display = "none";
});

requestAnimationFrame(function update() {
  if (game.paused) {
    context.fillStyle = 'rgb(255, 0, 0)';
    context.font = '48px serif';
    context.fillText('PAUSED', 195, 300);
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.gameLoop(highScoreInput, start, context);
  }
  requestAnimationFrame(update);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhdHRlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL2xpYi9XZWFwb24uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRhcmdldCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiZHgiLCJkeSIsImR2IiwiaXNFeHBsb3Npb24iLCJjb3VudCIsIm1pc3NpbGVDb3VudCIsIkdhbWVQaWVjZSIsIkJhdHRlcnkiLCJXZWFwb24iLCJtaXNzaWxlcyIsImVuZW15TWlzc2lsZXMiLCJ0YXJnZXRzIiwiZXhwbG9zaW9ucyIsImNpdGllcyIsImJhdHRlcmllcyIsImx2bCIsImVuZW15V2VhcG9uQ291bnQiLCJwbGF5ZXJNaXNzaWxlQ291bnQiLCJpc0dhbWVPdmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJwbGF5ZXJOYW1lIiwibGV2ZWwiLCJwYXVzZWQiLCJoaWdoU2NvcmVJbnB1dCIsInN0YXJ0IiwiY3R4IiwiZ2FtZU92ZXIiLCJkcmF3T2JqZWN0cyIsImFuaW1hdGVNaXNzaWxlcyIsImRldGVjdENvbGxpc2lvbnMiLCJkcmF3VGV4dCIsImxlbmd0aCIsIm5ld0dhbWUiLCJlbmVteVNob290IiwiZXVyZWthIiwic2FuRnJhbmNpc2NvIiwic2FuTHVpc09iaXNwbyIsInNhbnRhQmFyYmFyYSIsImxvc0FuZ2VsYXMiLCJzYW5EaWVnbyIsImJhdHRlcnkxIiwiYmF0dGVyeTIiLCJiYXR0ZXJ5MyIsImVuZW15VGFyZ2V0cyIsInNldFBsYXllck1pc3NpbGVDb3VudCIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiYmF0dGVyeSIsImlucHV0IiwiYnV0dG9uIiwic3R5bGUiLCJkaXNwbGF5IiwiZmlsbFN0eWxlIiwiZm9udCIsImZpbGxUZXh0IiwibmFtZSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iLCJiYXR0ZXJ5Q291bnRzIiwieFBvcyIsImZvckVhY2giLCJiYXRDb3VudCIsImRyYXdTY29yZSIsInJlY3QiLCJmaWxsIiwidGVycmFpbiIsImRyYXciLCJldmVudCIsImJhdHRlcnlYcG9zaXRpb25zIiwibWFwIiwiTWF0aCIsImFicyIsImxheWVyWCIsImNsb3Nlc3RCYXR0ZXJ5IiwiaW5kZXhPZiIsIm1pbiIsInZhbGlkQmF0dGVyeSIsImJhdHRlcnlQb3MiLCJmaW5kQmF0dGVyeSIsIm1vdXNlUG9zIiwibGF5ZXJZIiwibWlzc2lsZVRhcmdldCIsImNvdW50ZXJNaXNzaWxlIiwicHVzaCIsInAxIiwic3BsaWNlIiwibWF4IiwibWluaW11bSIsImNlaWwiLCJtYXhpbXVtIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Qb3MiLCJpIiwicGxheWVyVGFyZ2V0cyIsImVuZW15UG9zMSIsImVuZW15UG9zMiIsImVuZW15TWlzc2lsZSIsIndlYXBvbiIsImV4cGxvc2lvbiIsImdhbWVBcnJheXMiLCJnZW5lcmF0ZVRlcnJhaW4iLCJhcnJheSIsIm9iaiIsInNoaWZ0IiwibWlzc2lsZSIsIm1pc3NpbGVUYWlsIiwibW92ZSIsInRhaWwiLCJzZWciLCJvYmplY3RpdmVEZXRlY3Rpb24iLCJ3ZWFwb25zIiwicG9zRGlmZlkiLCJwMiIsImRlYWRXZWFwb24iLCJmaW5kSW5kZXgiLCJpbmRleCIsImV4cGxvZGUiLCJoeXBvRGlmZiIsImh5cG90IiwidGFyZ2V0IiwiZGVhZFRhcmdldCIsImlzQ29sbGlkaW5nV2l0aCIsInJhZGl1cyIsImRldGVjdEFycmF5cyIsImV4cGxvc2lvbkRldGVjdGlvbiIsIm9iamVjdCIsImlzTWlzc2lsZSIsImJlZ2luUGF0aCIsImZpbGxSZWN0IiwieEFtb3VudCIsInlBbW91bnQiLCJhcmMiLCJQSSIsImNsb3NlUGF0aCIsInNwZWVkIiwiYW5nbGUiLCJhdGFuMiIsInJhZGlhbnMiLCJ4dW5pdHMiLCJjb3MiLCJ5dW5pdHMiLCJzaW4iLCJzZWdtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlnaHNjb3JlUGxheWVyTmFtZSIsImNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiR2FtZSIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudEhpZ2hTY29yZSIsImUiLCJzaG9vdCIsImtleUNvZGUiLCJ0b2dnbGVQYXVzZSIsInByZXZlbnREZWZhdWx0Iiwic2V0SGlnaFNjb3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiY2xlYXJSZWN0IiwiZ2FtZUxvb3AiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QXFDaUksT0FBckM7QUFDRDtBQUNEYSx3QkFBc0JDLE1BQXRCO0FBQ0QsQ0FWRCxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBUYXJnZXQgPSByZXF1aXJlKCcuL1RhcmdldC5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJhdHRlcnkgZXh0ZW5kcyBUYXJnZXQge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiwgaXNFeHBsb3Npb24gPSBmYWxzZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2LCBpc0V4cGxvc2lvbiA9IGZhbHNlKTtcbiAgICB0aGlzLmNvdW50ID0gbnVsbDtcbiAgICB0aGlzLmlzRXhwbG9zaW9uID0gaXNFeHBsb3Npb247XG4gICAgdGhpcy5taXNzaWxlQ291bnQgPSAxMDtcbiAgfVxufTsiLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZS5qcycpO1xuY29uc3QgQmF0dGVyeSA9IHJlcXVpcmUoJy4vQmF0dGVyeS5qcycpO1xuY29uc3QgVGFyZ2V0ID0gcmVxdWlyZSgnLi9UYXJnZXQuanMnKTtcbmNvbnN0IFdlYXBvbiA9IHJlcXVpcmUoJy4vV2VhcG9uLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWlzc2lsZXMgPSBbXTtcbiAgICB0aGlzLmVuZW15TWlzc2lsZXMgPSBbXTtcbiAgICB0aGlzLnRhcmdldHMgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcbiAgICB0aGlzLmNpdGllcyA9IFtdO1xuICAgIHRoaXMuYmF0dGVyaWVzID0gW107XG4gICAgdGhpcy5sdmwgPSAxO1xuICAgIHRoaXMuZW5lbXlXZWFwb25Db3VudCA9ICh0aGlzLmx2bCAqIDUpO1xuICAgIHRoaXMucGxheWVyTWlzc2lsZUNvdW50O1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuaGlnaFNjb3JlID0ge3BsYXllck5hbWU6ICdUQ0snLCBsZXZlbDogMSwgc2NvcmU6IDB9O1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gIH1cblxuICBnYW1lTG9vcChoaWdoU2NvcmVJbnB1dCwgc3RhcnQsIGN0eCkge1xuICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgIHRoaXMuZ2FtZU92ZXIoY3R4LCBoaWdoU2NvcmVJbnB1dCwgc3RhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdPYmplY3RzKGN0eCk7XG4gICAgICB0aGlzLmFuaW1hdGVNaXNzaWxlcyh0aGlzLm1pc3NpbGVzLCBjdHgpO1xuICAgICAgdGhpcy5hbmltYXRlTWlzc2lsZXModGhpcy5lbmVteU1pc3NpbGVzLCBjdHgpO1xuICAgICAgdGhpcy5kZXRlY3RDb2xsaXNpb25zKCk7XG4gICAgICB0aGlzLmRyYXdUZXh0KGN0eCk7XG4gICAgfVxuICBcbiAgICBpZiAodGhpcy5jaXRpZXMubGVuZ3RoID09PSAwICYmIHRoaXMuZW5lbXlNaXNzaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNpdGllcy5sZW5ndGggIT09IDAgJiYgdGhpcy5lbmVteU1pc3NpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5sdmwrKztcbiAgICAgIHRoaXMubmV3R2FtZSgpO1xuICAgICAgdGhpcy5lbmVteVNob290KCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cbiBcbiAgbmV3R2FtZSgpIHtcbiAgICBjb25zdCBldXJla2EgPSBuZXcgVGFyZ2V0KDYwLCA1MDUsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3Qgc2FuRnJhbmNpc2NvID0gbmV3IFRhcmdldCgxMzUsIDUxMCwgNDAsIDMwLCAncmdiKDAsIDIwMCwgMjAwKScsIGZhbHNlKTtcbiAgICBjb25zdCBzYW5MdWlzT2Jpc3BvID0gbmV3IFRhcmdldCgyMTAsIDUxNSwgNDAsIDMwLCAncmdiKDAsIDIwMCwgMjAwKScsIGZhbHNlKTtcbiAgICBjb25zdCBzYW50YUJhcmJhcmEgPSBuZXcgVGFyZ2V0KDM2MCwgNTEwLCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IGxvc0FuZ2VsYXMgPSBuZXcgVGFyZ2V0KDQzMCwgNTAwLCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IHNhbkRpZWdvID0gbmV3IFRhcmdldCg1MDAsIDUxNSwgNDAsIDMwLCAncmdiKDAsIDIwMCwgMjAwKScsIGZhbHNlKTtcbiAgICBjb25zdCBiYXR0ZXJ5MSA9IG5ldyBCYXR0ZXJ5KDAsIDQ5MCwgNjAsIDYwLCAncmdiKDIwMCwgMjAwLCAwKScsIGZhbHNlLCAxMCk7XG4gICAgY29uc3QgYmF0dGVyeTIgPSBuZXcgQmF0dGVyeSgyNzAsIDQ5MCwgNzAsIDYwLCAncmdiKDIwMCwgMjAwLCAwKScsIGZhbHNlLCAxMCk7XG4gICAgY29uc3QgYmF0dGVyeTMgPSBuZXcgQmF0dGVyeSg1NDAsIDQ5MCwgNjAsIDYwLCAncmdiKDIwMCwgMjAwLCAwKScsIGZhbHNlLCAxMCk7XG4gICAgXG4gICAgaWYgKHRoaXMubHZsID09PSAxKSB7XG4gICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgIHRoaXMuY2l0aWVzID0gW2V1cmVrYSwgc2FuRnJhbmNpc2NvLCBzYW5MdWlzT2Jpc3BvLCBzYW50YUJhcmJhcmEsIGxvc0FuZ2VsYXMsIHNhbkRpZWdvXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2l0aWVzICE9PSAwKSB7XG4gICAgICB0aGlzLnNjb3JlICs9ICh0aGlzLnBsYXllck1pc3NpbGVDb3VudCAqIDUpO1xuICAgICAgdGhpcy5lbmVteVRhcmdldHMgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5iYXR0ZXJpZXMgPSBbYmF0dGVyeTEsIGJhdHRlcnkyLCBiYXR0ZXJ5M107XG4gICAgdGhpcy5zZXRQbGF5ZXJNaXNzaWxlQ291bnQoKTtcbiAgICB0aGlzLmVuZW15U2hvb3QoKTtcbiAgfVxuXG4gIHNldFBsYXllck1pc3NpbGVDb3VudCgpIHtcbiAgICB0aGlzLnBsYXllck1pc3NpbGVDb3VudCA9IHRoaXMuYmF0dGVyaWVzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGJhdHRlcnkpID0+IHtcbiAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGJhdHRlcnkubWlzc2lsZUNvdW50O1xuICAgIH0sIDApO1xuICB9XG5cbiAgZ2FtZU92ZXIoY3R4LCBpbnB1dCwgYnV0dG9uKSB7XG4gICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAwLCAwKSc7XG4gICAgY3R4LmZvbnQgPSAnNDhweCBzZXJpZic7XG5cbiAgICBpZiAodGhpcy5oaWdoU2NvcmUuc2NvcmUgPCB0aGlzLnNjb3JlKSB7XG4gICAgICBjdHguZmlsbFRleHQoJ0hJR0ggU0NPUkUhJywgMTUwLCAzMDApO1xuICAgICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NvcmUgIT09IDApIHtcbiAgICAgIHRoaXMubHZsID0gMTtcbiAgICAgIGN0eC5maWxsVGV4dCgnVEhFIEVORCcsIDE5NSwgMzAwKTtcbiAgICB9XG4gIH1cblxuICBzZXRIaWdoU2NvcmUobmFtZSkge1xuICAgIHRoaXMuaGlnaFNjb3JlID0ge1xuICAgICAgcGxheWVyTmFtZTogbmFtZS52YWx1ZSxcbiAgICAgIGxldmVsOiB0aGlzLmx2bCxcbiAgICAgIHNjb3JlOiB0aGlzLnNjb3JlXG4gICAgfTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoc2NvcmUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmhpZ2hTY29yZSkpO1xuICB9XG5cbiAgY3VycmVudEhpZ2hTY29yZSgpIHtcbiAgICB0aGlzLmhpZ2hTY29yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpKTtcbiAgfVxuXG4gIGRyYXdUZXh0KGN0eCkge1xuICAgIGNvbnN0IGJhdHRlcnlDb3VudHMgPSBbXG4gICAgICB7Y291bnQ6ICdPVVQnLCB4OiAwLCB4UG9zOiAxMH0sIFxuICAgICAge2NvdW50OiAnT1VUJywgeDogMjcwLCB4UG9zOiAyODV9LCBcbiAgICAgIHtjb3VudDogJ09VVCcsIHg6IDU0MCwgeFBvczogNTUwfVxuICAgIF07XG4gICAgXG4gICAgaWYgKHRoaXMuYmF0dGVyaWVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgYmF0dGVyeUNvdW50cy5mb3JFYWNoKChiYXRDb3VudCkgPT4geyBcbiAgICAgICAgdGhpcy5iYXR0ZXJpZXMuZm9yRWFjaCgoYmF0dGVyeSkgPT4geyBcbiAgICAgICAgICBpZiAoYmF0dGVyeS54ID09PSBiYXRDb3VudC54KSB7XG4gICAgICAgICAgICByZXR1cm4gYmF0Q291bnQuY291bnQgPSBiYXR0ZXJ5Lm1pc3NpbGVDb3VudDsgXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigwLCAyMDAsIDIwMCknO1xuICAgIGN0eC5mb250ID0gJzIwcHggc2Fucy1zZXJpZic7XG4gICAgYmF0dGVyeUNvdW50cy5mb3JFYWNoKGNvdW50ID0+IGN0eC5maWxsVGV4dChjb3VudC5jb3VudCwgY291bnQueFBvcyArIDYsIDU3MCkpO1xuICAgIHRoaXMuZHJhd1Njb3JlKGN0eCk7XG4gIH1cblxuICBkcmF3U2NvcmUoY3R4KSB7XG4gICAgY3R4LmZvbnQgPSAnMThweCBzYW5zLXNlcmlmJztcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYig1LCAzMiwgNzgpJztcbiAgICBjdHgucmVjdCgwLCAwLCA2MDAsIDQwKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwgMjU1LCAyNTUpJztcbiAgICBjdHguZmlsbFRleHQoYGxldmVsOiAke3RoaXMubHZsfWAsIDMwLCAyOCk7ICBcbiAgICBjdHguZmlsbFRleHQoYHNjb3JlOiAke3RoaXMuc2NvcmV9YCwgMTIwLCAyOCk7XG4gICAgY3R4LmZpbGxUZXh0KGBoaWdoIHNjb3JlOiAke3RoaXMuaGlnaFNjb3JlLnBsYXllck5hbWV9IHwgJHt0aGlzLmhpZ2hTY29yZS5zY29yZX1gLCAzMjAsIDI4KTtcbiAgfVxuXG4gIGdlbmVyYXRlVGVycmFpbihjdHgpIHtcbiAgICBjb25zdCB0ZXJyYWluID0gbmV3IEdhbWVQaWVjZSgwLCA1MjAsIDYwMCwgODAsICdyZ2IoMjU1LCAyNTUsIDApJywgMCk7XG5cbiAgICB0ZXJyYWluLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGZpbmRCYXR0ZXJ5KGV2ZW50KSB7XG4gICAgY29uc3Qge2JhdHRlcmllc30gPSB0aGlzO1xuICAgIGxldCBiYXR0ZXJ5WHBvc2l0aW9ucyA9IGJhdHRlcmllcy5tYXAoYmF0dGVyeSA9PiBNYXRoLmFicyhiYXR0ZXJ5LnggLSBldmVudC5sYXllclgpKTtcbiAgICBsZXQgY2xvc2VzdEJhdHRlcnkgPSBiYXR0ZXJ5WHBvc2l0aW9ucy5pbmRleE9mKE1hdGgubWluKC4uLmJhdHRlcnlYcG9zaXRpb25zKSk7XG4gICAgbGV0IHZhbGlkQmF0dGVyeSA9IGJhdHRlcmllc1tjbG9zZXN0QmF0dGVyeV07XG4gICAgbGV0IHhQb3MgPSB2YWxpZEJhdHRlcnkueCArIDMwO1xuXG4gICAgcmV0dXJuIHt4OiB4UG9zLCB5OiA0OTB9O1xuICB9XG5cbiAgc2hvb3QoZXZlbnQpIHtcbiAgICBjb25zdCB7YmF0dGVyaWVzLCB0YXJnZXRzLCBtaXNzaWxlc30gPSB0aGlzO1xuICAgIGNvbnN0IGJhdHRlcnlQb3MgPSB0aGlzLmZpbmRCYXR0ZXJ5KGV2ZW50KTtcbiAgICBjb25zdCBtb3VzZVBvcyA9IHt4OiBldmVudC5sYXllclgsIHk6IGV2ZW50LmxheWVyWX07XG4gICAgY29uc3QgbWlzc2lsZVRhcmdldCA9IG5ldyBUYXJnZXQobW91c2VQb3MueCwgbW91c2VQb3MueSwgMTAsIDEwLCAncmdiKDIwMCwgMjUwLCAyNSknLCAwLCAwKTtcblxuICAgIG1vdXNlUG9zLnkgPiA0MzggPyBtaXNzaWxlVGFyZ2V0LnkgPSA0MzUgOiBldmVudC5sYXllclk7XG4gICAgXG4gICAgY29uc3QgY291bnRlck1pc3NpbGUgPSBuZXcgV2VhcG9uKGJhdHRlcnlQb3MueCwgNDkwLCA1LCA1LCAncmdiKDAsIDIwMCwgMjAwKScsIDAsIDAsIDEyLCBiYXR0ZXJ5UG9zLCB7IHg6IG1vdXNlUG9zLnggKyA1LCB5OiBtaXNzaWxlVGFyZ2V0LnkgKyA1fSwgMTAsIHRydWUpO1xuICBcbiAgICB0YXJnZXRzLnB1c2gobWlzc2lsZVRhcmdldCk7XG4gICAgbWlzc2lsZXMucHVzaChjb3VudGVyTWlzc2lsZSk7XG5cbiAgICBiYXR0ZXJpZXMuZm9yRWFjaChiYXR0ZXJ5ID0+IHtcbiAgICAgIGlmIChiYXR0ZXJ5LnggPT09IGNvdW50ZXJNaXNzaWxlLnAxLnggLSAzMCkge1xuICAgICAgICBiYXR0ZXJ5Lm1pc3NpbGVDb3VudCAtPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGJhdHRlcnkubWlzc2lsZUNvdW50ID09PSAwKSB7XG4gICAgICAgIGJhdHRlcmllcy5zcGxpY2UoYmF0dGVyaWVzLmluZGV4T2YoYmF0dGVyeSksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2V0UGxheWVyTWlzc2lsZUNvdW50KCk7XG4gIH1cblxuICByYW5kb21Qb3MobWluLCBtYXgpIHtcbiAgICBjb25zdCBtaW5pbXVtID0gTWF0aC5jZWlsKG1pbik7XG4gICAgY29uc3QgbWF4aW11bSA9IE1hdGguZmxvb3IobWF4KTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4aW11bSAtIG1pbmltdW0gKyAxKSkgKyBtaW5pbXVtO1xuICB9XG5cbiAgZW5lbXlTaG9vdCgpIHtcbiAgICBjb25zdCB7ZW5lbXlXZWFwb25Db3VudCwgZW5lbXlNaXNzaWxlcywgcmFuZG9tUG9zfSA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuZW15V2VhcG9uQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgcGxheWVyVGFyZ2V0cyA9IFs2MCwgMTM1LCAyMTAsIDM2MCwgNDMwLCA1MDAsIDAsIDI3MCwgNTQwXTtcbiAgICAgIGNvbnN0IGVuZW15UG9zMSA9IHsgeDogcmFuZG9tUG9zKDEwLCA1OTApLCB5OiByYW5kb21Qb3MoLTUwMCwgLTEwMCkgfTtcbiAgICAgIGNvbnN0IGVuZW15UG9zMiA9IHsgeDogcGxheWVyVGFyZ2V0c1sgcmFuZG9tUG9zKDAsIDgpIF0gKyAyNSwgeTogNTIwIH07XG4gICAgICBjb25zdCBlbmVteU1pc3NpbGUgPSBcbiAgICAgIG5ldyBXZWFwb24oZW5lbXlQb3MxLngsIGVuZW15UG9zMS55LCA1LCA1LCAncmdiKDI1NSwgMCwgMCknLCAwLCAwLCAwLCBlbmVteVBvczEsIGVuZW15UG9zMiwgMSwgdHJ1ZSk7XG5cbiAgICAgIGVuZW15TWlzc2lsZXMucHVzaChlbmVteU1pc3NpbGUpO1xuICAgIH1cbiAgfVxuXG4gIGV4cGxvZGUod2VhcG9uKSB7XG4gICAgY29uc3QgZXhwbG9zaW9uID0gXG4gICAgbmV3IFRhcmdldCh3ZWFwb24ueCwgd2VhcG9uLnksIDMwLCAzMCwgJ3JnYigyNTUsIDEwMCwgMCknLCAwLCAwLCAwLCB0cnVlLCAyNSk7XG4gICAgXG4gICAgdGhpcy5leHBsb3Npb25zLnB1c2goZXhwbG9zaW9uKTtcbiAgfVxuXG4gIGRyYXdPYmplY3RzKGN0eCkge1xuICAgIGNvbnN0IGdhbWVBcnJheXMgPSBbXG4gICAgICB0aGlzLmVuZW15TWlzc2lsZXMsXG4gICAgICB0aGlzLmV4cGxvc2lvbnMsXG4gICAgICB0aGlzLmJhdHRlcmllcyxcbiAgICAgIHRoaXMubWlzc2lsZXMsXG4gICAgICB0aGlzLnRhcmdldHMsXG4gICAgICB0aGlzLmNpdGllc1xuICAgIF07XG5cbiAgICB0aGlzLmdlbmVyYXRlVGVycmFpbihjdHgpO1xuXG4gICAgZ2FtZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IGFycmF5LmZvckVhY2gob2JqID0+IHtcbiAgICAgIG9iai5jb3VudCA9PT0gMCAmJiBvYmouaXNFeHBsb3Npb24gPT09IHRydWUgXG4gICAgICAgID8gdGhpcy5leHBsb3Npb25zLnNoaWZ0KG9iaikgXG4gICAgICAgIDogb2JqLmNvdW50LS0gJiYgb2JqLmRyYXcoY3R4KTsgXG4gICAgfSkpO1xuICB9XG5cbiAgYW5pbWF0ZU1pc3NpbGVzKGFycmF5LCBjdHgpIHtcbiAgICBhcnJheS5mb3JFYWNoKChtaXNzaWxlKSA9PiB7XG4gICAgICBtaXNzaWxlLm1pc3NpbGVUYWlsKCk7XG4gICAgICBtaXNzaWxlLm1vdmUoKTtcbiAgICAgIG1pc3NpbGUuZHJhdyhjdHgpO1xuICAgICAgbWlzc2lsZS50YWlsLmZvckVhY2goc2VnID0+IHNlZy5kcmF3KGN0eCkpO1xuICAgICAgdGhpcy5vYmplY3RpdmVEZXRlY3Rpb24oYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgb2JqZWN0aXZlRGV0ZWN0aW9uKHdlYXBvbnMpIHtcbiAgICB3ZWFwb25zLmZvckVhY2goKHdlYXBvbikgPT4ge1xuICAgICAgY29uc3QgcG9zRGlmZlkgPSBNYXRoLmFicyh3ZWFwb24ueSAtIHdlYXBvbi5wMi55KTtcbiAgICAgIGxldCBkZWFkV2VhcG9uID0gd2VhcG9ucy5pbmRleE9mKHdlYXBvbik7XG5cbiAgICAgIGlmICggcG9zRGlmZlkgPCA1ICkge1xuICAgICAgICB3ZWFwb25zLnNwbGljZShkZWFkV2VhcG9uLCAxKTtcbiAgICAgICAgdGhpcy50YXJnZXRzLnNwbGljZSh3ZWFwb25zLmZpbmRJbmRleChpbmRleCA9PiBpbmRleCksIDEpO1xuICAgICAgICB0aGlzLmV4cGxvZGUod2VhcG9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGV4cGxvc2lvbkRldGVjdGlvbih0YXJnZXRzKSB7XG4gICAgdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICB0aGlzLmVuZW15TWlzc2lsZXMuZm9yRWFjaCh3ZWFwb24gPT4ge1xuICAgICAgICBsZXQgaHlwb0RpZmYgPSBNYXRoLmh5cG90KHRhcmdldC54IC0gd2VhcG9uLngsIHRhcmdldC55IC0gd2VhcG9uLnkpO1xuICAgICAgICBsZXQgZGVhZFdlYXBvbiA9IHRoaXMuZW5lbXlNaXNzaWxlcy5pbmRleE9mKHdlYXBvbik7XG4gICAgICAgIGxldCBkZWFkVGFyZ2V0ID0gdGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgIFxuICAgICAgICBpZiAod2VhcG9uLmlzQ29sbGlkaW5nV2l0aCh0YXJnZXQpICYmIHRhcmdldC54ID09PSB3ZWFwb24ucDIueCAtIDI1ICYmIHdlYXBvbi55ID4gNTEwKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldHMuc3BsaWNlKGRlYWRUYXJnZXQsIDEpO1xuICAgICAgICB9IGVsc2UgaWYgKGh5cG9EaWZmIDwgdGFyZ2V0LnJhZGl1cykge1xuICAgICAgICAgIHRoaXMuZXhwbG9kZSh3ZWFwb24pO1xuICAgICAgICAgIHRoaXMuZW5lbXlNaXNzaWxlcy5zcGxpY2UoZGVhZFdlYXBvbiwgMSk7XG4gICAgICAgICAgdGhpcy5zY29yZSArPSAyNSAqIHRoaXMubHZsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRldGVjdENvbGxpc2lvbnMoKSB7XG4gICAgbGV0IGRldGVjdEFycmF5cyA9IFtcbiAgICAgIHRoaXMuY2l0aWVzLFxuICAgICAgdGhpcy5iYXR0ZXJpZXMsXG4gICAgICB0aGlzLmV4cGxvc2lvbnNcbiAgICBdO1xuXG4gICAgZGV0ZWN0QXJyYXlzLmZvckVhY2goYXJyYXkgPT4gdGhpcy5leHBsb3Npb25EZXRlY3Rpb24oYXJyYXkpKTtcbiAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCA9IDAsIGR5ID0gMCwgZHYgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5keCA9IGR4OyBcbiAgICB0aGlzLmR5ID0gZHk7IFxuICAgIHRoaXMuZHYgPSBkdjtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gIShcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPCBvYmplY3QueCB8fFxuICAgICAgdGhpcy54ID4gb2JqZWN0LnggKyBvYmplY3Qud2lkdGggfHwgXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA8IG9iamVjdC55IHx8XG4gICAgICB0aGlzLnkgPiBvYmplY3QueSArIG9iamVjdC5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgaWYgKCh0aGlzLmlzTWlzc2lsZSB8fCB0aGlzLmlzRXhwbG9zaW9uKSAhPT0gdHJ1ZSkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmUoIHhBbW91bnQgPSB0aGlzLmR4LCB5QW1vdW50ID0gdGhpcy5keSkge1xuICAgIHRoaXMueCArPSB4QW1vdW50ICogdGhpcy5kdjtcbiAgICB0aGlzLnkgKz0geUFtb3VudCAqIHRoaXMuZHY7XG4gIH1cbiAgXG59O1xuXG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRhcmdldCBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2LCBpc0V4cGxvc2lvbiA9IGZhbHNlLCByYWRpdXMgPSAwKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4LCBkeSwgZHYpO1xuICAgIHRoaXMuY291bnQgPSA4MDtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLmlzRXhwbG9zaW9uID0gaXNFeHBsb3Npb247XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgICBjb25zdCB7IHgsIHksIGlzRXhwbG9zaW9uLCByYWRpdXMgfSA9IHRoaXM7XG4gICBcbiAgICBpZiAoaXNFeHBsb3Npb24gPT09IHRydWUpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwgMTAwLCAwKSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxufTsiLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdlYXBvbiBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2ID0gMC41LCBwMSwgcDIsIHNwZWVkLCBpc01pc3NpbGUgPSBmYWxzZSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2ID0gMC41KTtcbiAgICB0aGlzLmR2ID0gZHY7XG4gICAgdGhpcy5wMSA9IHAxO1xuICAgIHRoaXMucDIgPSBwMjtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5pc01pc3NpbGUgPSBpc01pc3NpbGU7XG4gICAgLy8gYW5nbGUgaW4gZGVncmVlc1xuICAgIHRoaXMuYW5nbGUgPSBNYXRoLmF0YW4yKHRoaXMucDIueSAtIHRoaXMucDEueSwgdGhpcy5wMi54IC0gdGhpcy5wMS54KSAqIDE4MCAvIE1hdGguUEk7XG4gICAgLy8gYW5nbGUgaW4gcmFkaWFuc1xuICAgIHRoaXMucmFkaWFucyA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xuICAgIC8vSG93IG1hbnkgbW92ZXMgdG8gbWFrZSBlYWNoIHJlZHJhd1xuICAgIHRoaXMueHVuaXRzID0gTWF0aC5jb3ModGhpcy5yYWRpYW5zKSAqIHRoaXMuc3BlZWQ7XG4gICAgdGhpcy55dW5pdHMgPSBNYXRoLnNpbih0aGlzLnJhZGlhbnMpICogdGhpcy5zcGVlZDtcbiAgICB0aGlzLnRhaWwgPSBbXTtcbiAgfVxuXG4gIG1pc3NpbGVUYWlsKCkge1xuICAgIGNvbnN0IHt4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgdGFpbH0gPSB0aGlzO1xuXG4gICAgY29uc3Qgc2VnbWVudCA9IFxuICAgIG5ldyBHYW1lUGllY2UoeCAtIDMsIHkgLSAzLCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgMCwgMCwgMCk7XG5cbiAgICB0YWlsLnB1c2goc2VnbWVudCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgICBjb25zdCB7IHgsIHksIGNvbG9yLCBpc01pc3NpbGUgfSA9IHRoaXM7XG5cbiAgICBpZiAoaXNNaXNzaWxlID09PSB0cnVlKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKHgsIHksIDMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBcbiAgbW92ZSgpIHtcbiAgICBzdXBlci5tb3ZlKCk7XG4gICAgLy8gdGhpcy5jdXJyZW50UG9zID0ge3g6TWF0aC5yb3VuZCh0aGlzLngpLCB5Ok1hdGgucm91bmQodGhpcy55KX07XG4gICAgaWYgKHRoaXMuaXNNaXNzaWxlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnggKz0gdGhpcy54dW5pdHM7XG4gICAgICB0aGlzLnkgKz0gdGhpcy55dW5pdHM7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbn07IiwiY29uc3QgaGlnaFNjb3JlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaHNjb3JlJyk7XG5jb25zdCBoaWdoc2NvcmVQbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbmNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJ0bicpO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGdhbWUuY3VycmVudEhpZ2hTY29yZSgpKTtcblxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBnYW1lLnNob290KGUpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSA4MCkge1xuICAgIGdhbWUudG9nZ2xlUGF1c2UoKTtcbiAgfVxufSk7XG5cbmhpZ2hTY29yZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBnYW1lLnNldEhpZ2hTY29yZShoaWdoc2NvcmVQbGF5ZXJOYW1lKTtcbiAgaGlnaFNjb3JlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5cbnN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGdhbWUuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICBnYW1lLm5ld0dhbWUoKTtcbiAgc3RhcnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiB1cGRhdGUoKSB7XG4gIGlmIChnYW1lLnBhdXNlZCkge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYigyNTUsIDAsIDApJztcbiAgICBjb250ZXh0LmZvbnQgPSAnNDhweCBzZXJpZic7XG4gICAgY29udGV4dC5maWxsVGV4dCgnUEFVU0VEJywgMTk1LCAzMDApO1xuICB9IGVsc2Uge1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgZ2FtZS5nYW1lTG9vcChoaWdoU2NvcmVJbnB1dCwgc3RhcnQsIGNvbnRleHQpO1xuICB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=