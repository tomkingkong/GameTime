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

      if (this.highScore[score] < this.score) {
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
      ctx.fillText('high score: ' + this.highScore[playerName] + ' | ' + this.highScore[score], 320, 28);
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
window.addEventListener('load', game.currentHighScore);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhdHRlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL2xpYi9XZWFwb24uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRhcmdldCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiZHgiLCJkeSIsImR2IiwiaXNFeHBsb3Npb24iLCJjb3VudCIsIm1pc3NpbGVDb3VudCIsIkdhbWVQaWVjZSIsIkJhdHRlcnkiLCJXZWFwb24iLCJtaXNzaWxlcyIsImVuZW15TWlzc2lsZXMiLCJ0YXJnZXRzIiwiZXhwbG9zaW9ucyIsImNpdGllcyIsImJhdHRlcmllcyIsImx2bCIsImVuZW15V2VhcG9uQ291bnQiLCJwbGF5ZXJNaXNzaWxlQ291bnQiLCJpc0dhbWVPdmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJwbGF5ZXJOYW1lIiwibGV2ZWwiLCJwYXVzZWQiLCJoaWdoU2NvcmVJbnB1dCIsInN0YXJ0IiwiY3R4IiwiZ2FtZU92ZXIiLCJkcmF3T2JqZWN0cyIsImFuaW1hdGVNaXNzaWxlcyIsImRldGVjdENvbGxpc2lvbnMiLCJkcmF3VGV4dCIsImxlbmd0aCIsIm5ld0dhbWUiLCJlbmVteVNob290IiwiZXVyZWthIiwic2FuRnJhbmNpc2NvIiwic2FuTHVpc09iaXNwbyIsInNhbnRhQmFyYmFyYSIsImxvc0FuZ2VsYXMiLCJzYW5EaWVnbyIsImJhdHRlcnkxIiwiYmF0dGVyeTIiLCJiYXR0ZXJ5MyIsImVuZW15VGFyZ2V0cyIsInNldFBsYXllck1pc3NpbGVDb3VudCIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiYmF0dGVyeSIsImlucHV0IiwiYnV0dG9uIiwic3R5bGUiLCJkaXNwbGF5IiwiZmlsbFN0eWxlIiwiZm9udCIsImZpbGxUZXh0IiwibmFtZSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iLCJiYXR0ZXJ5Q291bnRzIiwieFBvcyIsImZvckVhY2giLCJiYXRDb3VudCIsImRyYXdTY29yZSIsInJlY3QiLCJmaWxsIiwidGVycmFpbiIsImRyYXciLCJldmVudCIsImJhdHRlcnlYcG9zaXRpb25zIiwibWFwIiwiTWF0aCIsImFicyIsImxheWVyWCIsImNsb3Nlc3RCYXR0ZXJ5IiwiaW5kZXhPZiIsIm1pbiIsInZhbGlkQmF0dGVyeSIsImJhdHRlcnlQb3MiLCJmaW5kQmF0dGVyeSIsIm1vdXNlUG9zIiwibGF5ZXJZIiwibWlzc2lsZVRhcmdldCIsImNvdW50ZXJNaXNzaWxlIiwicHVzaCIsInAxIiwic3BsaWNlIiwibWF4IiwibWluaW11bSIsImNlaWwiLCJtYXhpbXVtIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Qb3MiLCJpIiwicGxheWVyVGFyZ2V0cyIsImVuZW15UG9zMSIsImVuZW15UG9zMiIsImVuZW15TWlzc2lsZSIsIndlYXBvbiIsImV4cGxvc2lvbiIsImdhbWVBcnJheXMiLCJnZW5lcmF0ZVRlcnJhaW4iLCJhcnJheSIsIm9iaiIsInNoaWZ0IiwibWlzc2lsZSIsIm1pc3NpbGVUYWlsIiwibW92ZSIsInRhaWwiLCJzZWciLCJvYmplY3RpdmVEZXRlY3Rpb24iLCJ3ZWFwb25zIiwicG9zRGlmZlkiLCJwMiIsImRlYWRXZWFwb24iLCJmaW5kSW5kZXgiLCJpbmRleCIsImV4cGxvZGUiLCJoeXBvRGlmZiIsImh5cG90IiwidGFyZ2V0IiwiZGVhZFRhcmdldCIsImlzQ29sbGlkaW5nV2l0aCIsInJhZGl1cyIsImRldGVjdEFycmF5cyIsImV4cGxvc2lvbkRldGVjdGlvbiIsIm9iamVjdCIsImlzTWlzc2lsZSIsImJlZ2luUGF0aCIsImZpbGxSZWN0IiwieEFtb3VudCIsInlBbW91bnQiLCJhcmMiLCJQSSIsImNsb3NlUGF0aCIsInNwZWVkIiwiYW5nbGUiLCJhdGFuMiIsInJhZGlhbnMiLCJ4dW5pdHMiLCJjb3MiLCJ5dW5pdHMiLCJzaW4iLCJzZWdtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlnaHNjb3JlUGxheWVyTmFtZSIsImNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiR2FtZSIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudEhpZ2hTY29yZSIsImUiLCJzaG9vdCIsImtleUNvZGUiLCJ0b2dnbGVQYXVzZSIsInByZXZlbnREZWZhdWx0Iiwic2V0SGlnaFNjb3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiY2xlYXJSZWN0IiwiZ2FtZUxvb3AiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QUE3QztBQUNBK0osU0FBS2EsUUFBTCxDQUFjbEosY0FBZCxFQUE4QkMsS0FBOUIsRUFBcUNpSSxPQUFyQztBQUNEO0FBQ0RhLHdCQUFzQkMsTUFBdEI7QUFDRCxDQVZELEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IFRhcmdldCA9IHJlcXVpcmUoJy4vVGFyZ2V0LmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQmF0dGVyeSBleHRlbmRzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2LCBpc0V4cGxvc2lvbiA9IGZhbHNlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4LCBkeSwgZHYsIGlzRXhwbG9zaW9uID0gZmFsc2UpO1xuICAgIHRoaXMuY291bnQgPSBudWxsO1xuICAgIHRoaXMuaXNFeHBsb3Npb24gPSBpc0V4cGxvc2lvbjtcbiAgICB0aGlzLm1pc3NpbGVDb3VudCA9IDEwO1xuICB9XG59OyIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlLmpzJyk7XG5jb25zdCBCYXR0ZXJ5ID0gcmVxdWlyZSgnLi9CYXR0ZXJ5LmpzJyk7XG5jb25zdCBUYXJnZXQgPSByZXF1aXJlKCcuL1RhcmdldC5qcycpO1xuY29uc3QgV2VhcG9uID0gcmVxdWlyZSgnLi9XZWFwb24uanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5taXNzaWxlcyA9IFtdO1xuICAgIHRoaXMuZW5lbXlNaXNzaWxlcyA9IFtdO1xuICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xuICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xuICAgIHRoaXMuY2l0aWVzID0gW107XG4gICAgdGhpcy5iYXR0ZXJpZXMgPSBbXTtcbiAgICB0aGlzLmx2bCA9IDE7XG4gICAgdGhpcy5lbmVteVdlYXBvbkNvdW50ID0gKHRoaXMubHZsICogNSk7XG4gICAgdGhpcy5wbGF5ZXJNaXNzaWxlQ291bnQ7XG4gICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSB7cGxheWVyTmFtZTogJ1RDSycsIGxldmVsOiAxLCBzY29yZTogMH07XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdhbWVMb29wKGhpZ2hTY29yZUlucHV0LCBzdGFydCwgY3R4KSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgdGhpcy5nYW1lT3ZlcihjdHgsIGhpZ2hTY29yZUlucHV0LCBzdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd09iamVjdHMoY3R4KTtcbiAgICAgIHRoaXMuYW5pbWF0ZU1pc3NpbGVzKHRoaXMubWlzc2lsZXMsIGN0eCk7XG4gICAgICB0aGlzLmFuaW1hdGVNaXNzaWxlcyh0aGlzLmVuZW15TWlzc2lsZXMsIGN0eCk7XG4gICAgICB0aGlzLmRldGVjdENvbGxpc2lvbnMoKTtcbiAgICAgIHRoaXMuZHJhd1RleHQoY3R4KTtcbiAgICB9XG4gIFxuICAgIGlmICh0aGlzLmNpdGllcy5sZW5ndGggPT09IDAgJiYgdGhpcy5lbmVteU1pc3NpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2l0aWVzLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmVuZW15TWlzc2lsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmx2bCsrO1xuICAgICAgdGhpcy5uZXdHYW1lKCk7XG4gICAgICB0aGlzLmVuZW15U2hvb3QoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVQYXVzZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgfVxuIFxuICBuZXdHYW1lKCkge1xuICAgIGNvbnN0IGV1cmVrYSA9IG5ldyBUYXJnZXQoNjAsIDUwNSwgNDAsIDMwLCAncmdiKDAsIDIwMCwgMjAwKScsIGZhbHNlKTtcbiAgICBjb25zdCBzYW5GcmFuY2lzY28gPSBuZXcgVGFyZ2V0KDEzNSwgNTEwLCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IHNhbkx1aXNPYmlzcG8gPSBuZXcgVGFyZ2V0KDIxMCwgNTE1LCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IHNhbnRhQmFyYmFyYSA9IG5ldyBUYXJnZXQoMzYwLCA1MTAsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3QgbG9zQW5nZWxhcyA9IG5ldyBUYXJnZXQoNDMwLCA1MDAsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3Qgc2FuRGllZ28gPSBuZXcgVGFyZ2V0KDUwMCwgNTE1LCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IGJhdHRlcnkxID0gbmV3IEJhdHRlcnkoMCwgNDkwLCA2MCwgNjAsICdyZ2IoMjAwLCAyMDAsIDApJywgZmFsc2UsIDEwKTtcbiAgICBjb25zdCBiYXR0ZXJ5MiA9IG5ldyBCYXR0ZXJ5KDI3MCwgNDkwLCA3MCwgNjAsICdyZ2IoMjAwLCAyMDAsIDApJywgZmFsc2UsIDEwKTtcbiAgICBjb25zdCBiYXR0ZXJ5MyA9IG5ldyBCYXR0ZXJ5KDU0MCwgNDkwLCA2MCwgNjAsICdyZ2IoMjAwLCAyMDAsIDApJywgZmFsc2UsIDEwKTtcbiAgICBcbiAgICBpZiAodGhpcy5sdmwgPT09IDEpIHtcbiAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgdGhpcy5jaXRpZXMgPSBbZXVyZWthLCBzYW5GcmFuY2lzY28sIHNhbkx1aXNPYmlzcG8sIHNhbnRhQmFyYmFyYSwgbG9zQW5nZWxhcywgc2FuRGllZ29dO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jaXRpZXMgIT09IDApIHtcbiAgICAgIHRoaXMuc2NvcmUgKz0gKHRoaXMucGxheWVyTWlzc2lsZUNvdW50ICogNSk7XG4gICAgICB0aGlzLmVuZW15VGFyZ2V0cyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmJhdHRlcmllcyA9IFtiYXR0ZXJ5MSwgYmF0dGVyeTIsIGJhdHRlcnkzXTtcbiAgICB0aGlzLnNldFBsYXllck1pc3NpbGVDb3VudCgpO1xuICAgIHRoaXMuZW5lbXlTaG9vdCgpO1xuICB9XG5cbiAgc2V0UGxheWVyTWlzc2lsZUNvdW50KCkge1xuICAgIHRoaXMucGxheWVyTWlzc2lsZUNvdW50ID0gdGhpcy5iYXR0ZXJpZXMucmVkdWNlKChhY2N1bXVsYXRvciwgYmF0dGVyeSkgPT4ge1xuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgYmF0dGVyeS5taXNzaWxlQ291bnQ7XG4gICAgfSwgMCk7XG4gIH1cblxuICBnYW1lT3ZlcihjdHgsIGlucHV0LCBidXR0b24pIHtcbiAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDAsIDApJztcbiAgICBjdHguZm9udCA9ICc0OHB4IHNlcmlmJztcblxuICAgIGlmICh0aGlzLmhpZ2hTY29yZS5zY29yZSA8IHRoaXMuc2NvcmUpIHtcbiAgICAgIGN0eC5maWxsVGV4dCgnSElHSCBTQ09SRSEnLCAxNTAsIDMwMCk7XG4gICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY29yZSAhPT0gMCkge1xuICAgICAgdGhpcy5sdmwgPSAxO1xuICAgICAgY3R4LmZpbGxUZXh0KCdUSEUgRU5EJywgMTk1LCAzMDApO1xuICAgIH1cbiAgfVxuXG4gIHNldEhpZ2hTY29yZShuYW1lKSB7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSB7XG4gICAgICBwbGF5ZXJOYW1lOiBuYW1lLnZhbHVlLFxuICAgICAgbGV2ZWw6IHRoaXMubHZsLFxuICAgICAgc2NvcmU6IHRoaXMuc2NvcmVcbiAgICB9O1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hzY29yZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuaGlnaFNjb3JlKSk7XG4gIH1cblxuICBjdXJyZW50SGlnaFNjb3JlKCkge1xuICAgIHRoaXMuaGlnaFNjb3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJykpO1xuICB9XG5cbiAgZHJhd1RleHQoY3R4KSB7XG4gICAgY29uc3QgYmF0dGVyeUNvdW50cyA9IFtcbiAgICAgIHtjb3VudDogJ09VVCcsIHg6IDAsIHhQb3M6IDEwfSwgXG4gICAgICB7Y291bnQ6ICdPVVQnLCB4OiAyNzAsIHhQb3M6IDI4NX0sIFxuICAgICAge2NvdW50OiAnT1VUJywgeDogNTQwLCB4UG9zOiA1NTB9XG4gICAgXTtcbiAgICBcbiAgICBpZiAodGhpcy5iYXR0ZXJpZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBiYXR0ZXJ5Q291bnRzLmZvckVhY2goKGJhdENvdW50KSA9PiB7IFxuICAgICAgICB0aGlzLmJhdHRlcmllcy5mb3JFYWNoKChiYXR0ZXJ5KSA9PiB7IFxuICAgICAgICAgIGlmIChiYXR0ZXJ5LnggPT09IGJhdENvdW50LngpIHtcbiAgICAgICAgICAgIHJldHVybiBiYXRDb3VudC5jb3VudCA9IGJhdHRlcnkubWlzc2lsZUNvdW50OyBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDAsIDIwMCwgMjAwKSc7XG4gICAgY3R4LmZvbnQgPSAnMjBweCBzYW5zLXNlcmlmJztcbiAgICBiYXR0ZXJ5Q291bnRzLmZvckVhY2goY291bnQgPT4gY3R4LmZpbGxUZXh0KGNvdW50LmNvdW50LCBjb3VudC54UG9zICsgNiwgNTcwKSk7XG4gICAgdGhpcy5kcmF3U2NvcmUoY3R4KTtcbiAgfVxuXG4gIGRyYXdTY29yZShjdHgpIHtcbiAgICBjdHguZm9udCA9ICcxOHB4IHNhbnMtc2VyaWYnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDUsIDMyLCA3OCknO1xuICAgIGN0eC5yZWN0KDAsIDAsIDYwMCwgNDApO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAyNTUsIDI1NSknO1xuICAgIGN0eC5maWxsVGV4dChgbGV2ZWw6ICR7dGhpcy5sdmx9YCwgMzAsIDI4KTsgIFxuICAgIGN0eC5maWxsVGV4dChgc2NvcmU6ICR7dGhpcy5zY29yZX1gLCAxMjAsIDI4KTtcbiAgICBjdHguZmlsbFRleHQoYGhpZ2ggc2NvcmU6ICR7dGhpcy5oaWdoU2NvcmUucGxheWVyTmFtZX0gfCAke3RoaXMuaGlnaFNjb3JlLnNjb3JlfWAsIDMyMCwgMjgpO1xuICB9XG5cbiAgZ2VuZXJhdGVUZXJyYWluKGN0eCkge1xuICAgIGNvbnN0IHRlcnJhaW4gPSBuZXcgR2FtZVBpZWNlKDAsIDUyMCwgNjAwLCA4MCwgJ3JnYigyNTUsIDI1NSwgMCknLCAwKTtcblxuICAgIHRlcnJhaW4uZHJhdyhjdHgpO1xuICB9XG5cbiAgZmluZEJhdHRlcnkoZXZlbnQpIHtcbiAgICBjb25zdCB7YmF0dGVyaWVzfSA9IHRoaXM7XG4gICAgbGV0IGJhdHRlcnlYcG9zaXRpb25zID0gYmF0dGVyaWVzLm1hcChiYXR0ZXJ5ID0+IE1hdGguYWJzKGJhdHRlcnkueCAtIGV2ZW50LmxheWVyWCkpO1xuICAgIGxldCBjbG9zZXN0QmF0dGVyeSA9IGJhdHRlcnlYcG9zaXRpb25zLmluZGV4T2YoTWF0aC5taW4oLi4uYmF0dGVyeVhwb3NpdGlvbnMpKTtcbiAgICBsZXQgdmFsaWRCYXR0ZXJ5ID0gYmF0dGVyaWVzW2Nsb3Nlc3RCYXR0ZXJ5XTtcbiAgICBsZXQgeFBvcyA9IHZhbGlkQmF0dGVyeS54ICsgMzA7XG5cbiAgICByZXR1cm4ge3g6IHhQb3MsIHk6IDQ5MH07XG4gIH1cblxuICBzaG9vdChldmVudCkge1xuICAgIGNvbnN0IHtiYXR0ZXJpZXMsIHRhcmdldHMsIG1pc3NpbGVzfSA9IHRoaXM7XG4gICAgY29uc3QgYmF0dGVyeVBvcyA9IHRoaXMuZmluZEJhdHRlcnkoZXZlbnQpO1xuICAgIGNvbnN0IG1vdXNlUG9zID0ge3g6IGV2ZW50LmxheWVyWCwgeTogZXZlbnQubGF5ZXJZfTtcbiAgICBjb25zdCBtaXNzaWxlVGFyZ2V0ID0gbmV3IFRhcmdldChtb3VzZVBvcy54LCBtb3VzZVBvcy55LCAxMCwgMTAsICdyZ2IoMjAwLCAyNTAsIDI1KScsIDAsIDApO1xuXG4gICAgbW91c2VQb3MueSA+IDQzOCA/IG1pc3NpbGVUYXJnZXQueSA9IDQzNSA6IGV2ZW50LmxheWVyWTtcbiAgICBcbiAgICBjb25zdCBjb3VudGVyTWlzc2lsZSA9IG5ldyBXZWFwb24oYmF0dGVyeVBvcy54LCA0OTAsIDUsIDUsICdyZ2IoMCwgMjAwLCAyMDApJywgMCwgMCwgMTIsIGJhdHRlcnlQb3MsIHsgeDogbW91c2VQb3MueCArIDUsIHk6IG1pc3NpbGVUYXJnZXQueSArIDV9LCAxMCwgdHJ1ZSk7XG4gIFxuICAgIHRhcmdldHMucHVzaChtaXNzaWxlVGFyZ2V0KTtcbiAgICBtaXNzaWxlcy5wdXNoKGNvdW50ZXJNaXNzaWxlKTtcblxuICAgIGJhdHRlcmllcy5mb3JFYWNoKGJhdHRlcnkgPT4ge1xuICAgICAgaWYgKGJhdHRlcnkueCA9PT0gY291bnRlck1pc3NpbGUucDEueCAtIDMwKSB7XG4gICAgICAgIGJhdHRlcnkubWlzc2lsZUNvdW50IC09IDE7XG4gICAgICB9XG4gICAgICBpZiAoYmF0dGVyeS5taXNzaWxlQ291bnQgPT09IDApIHtcbiAgICAgICAgYmF0dGVyaWVzLnNwbGljZShiYXR0ZXJpZXMuaW5kZXhPZihiYXR0ZXJ5KSwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZXRQbGF5ZXJNaXNzaWxlQ291bnQoKTtcbiAgfVxuXG4gIHJhbmRvbVBvcyhtaW4sIG1heCkge1xuICAgIGNvbnN0IG1pbmltdW0gPSBNYXRoLmNlaWwobWluKTtcbiAgICBjb25zdCBtYXhpbXVtID0gTWF0aC5mbG9vcihtYXgpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXhpbXVtIC0gbWluaW11bSArIDEpKSArIG1pbmltdW07XG4gIH1cblxuICBlbmVteVNob290KCkge1xuICAgIGNvbnN0IHtlbmVteVdlYXBvbkNvdW50LCBlbmVteU1pc3NpbGVzLCByYW5kb21Qb3N9ID0gdGhpcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW5lbXlXZWFwb25Db3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBwbGF5ZXJUYXJnZXRzID0gWzYwLCAxMzUsIDIxMCwgMzYwLCA0MzAsIDUwMCwgMCwgMjcwLCA1NDBdO1xuICAgICAgY29uc3QgZW5lbXlQb3MxID0geyB4OiByYW5kb21Qb3MoMTAsIDU5MCksIHk6IHJhbmRvbVBvcygtNTAwLCAtMTAwKSB9O1xuICAgICAgY29uc3QgZW5lbXlQb3MyID0geyB4OiBwbGF5ZXJUYXJnZXRzWyByYW5kb21Qb3MoMCwgOCkgXSArIDI1LCB5OiA1MjAgfTtcbiAgICAgIGNvbnN0IGVuZW15TWlzc2lsZSA9IFxuICAgICAgbmV3IFdlYXBvbihlbmVteVBvczEueCwgZW5lbXlQb3MxLnksIDUsIDUsICdyZ2IoMjU1LCAwLCAwKScsIDAsIDAsIDAsIGVuZW15UG9zMSwgZW5lbXlQb3MyLCAxLCB0cnVlKTtcblxuICAgICAgZW5lbXlNaXNzaWxlcy5wdXNoKGVuZW15TWlzc2lsZSk7XG4gICAgfVxuICB9XG5cbiAgZXhwbG9kZSh3ZWFwb24pIHtcbiAgICBjb25zdCBleHBsb3Npb24gPSBcbiAgICBuZXcgVGFyZ2V0KHdlYXBvbi54LCB3ZWFwb24ueSwgMzAsIDMwLCAncmdiKDI1NSwgMTAwLCAwKScsIDAsIDAsIDAsIHRydWUsIDI1KTtcbiAgICBcbiAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChleHBsb3Npb24pO1xuICB9XG5cbiAgZHJhd09iamVjdHMoY3R4KSB7XG4gICAgY29uc3QgZ2FtZUFycmF5cyA9IFtcbiAgICAgIHRoaXMuZW5lbXlNaXNzaWxlcyxcbiAgICAgIHRoaXMuZXhwbG9zaW9ucyxcbiAgICAgIHRoaXMuYmF0dGVyaWVzLFxuICAgICAgdGhpcy5taXNzaWxlcyxcbiAgICAgIHRoaXMudGFyZ2V0cyxcbiAgICAgIHRoaXMuY2l0aWVzXG4gICAgXTtcblxuICAgIHRoaXMuZ2VuZXJhdGVUZXJyYWluKGN0eCk7XG5cbiAgICBnYW1lQXJyYXlzLmZvckVhY2goYXJyYXkgPT4gYXJyYXkuZm9yRWFjaChvYmogPT4ge1xuICAgICAgb2JqLmNvdW50ID09PSAwICYmIG9iai5pc0V4cGxvc2lvbiA9PT0gdHJ1ZSBcbiAgICAgICAgPyB0aGlzLmV4cGxvc2lvbnMuc2hpZnQob2JqKSBcbiAgICAgICAgOiBvYmouY291bnQtLSAmJiBvYmouZHJhdyhjdHgpOyBcbiAgICB9KSk7XG4gIH1cblxuICBhbmltYXRlTWlzc2lsZXMoYXJyYXksIGN0eCkge1xuICAgIGFycmF5LmZvckVhY2goKG1pc3NpbGUpID0+IHtcbiAgICAgIG1pc3NpbGUubWlzc2lsZVRhaWwoKTtcbiAgICAgIG1pc3NpbGUubW92ZSgpO1xuICAgICAgbWlzc2lsZS5kcmF3KGN0eCk7XG4gICAgICBtaXNzaWxlLnRhaWwuZm9yRWFjaChzZWcgPT4gc2VnLmRyYXcoY3R4KSk7XG4gICAgICB0aGlzLm9iamVjdGl2ZURldGVjdGlvbihhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBvYmplY3RpdmVEZXRlY3Rpb24od2VhcG9ucykge1xuICAgIHdlYXBvbnMuZm9yRWFjaCgod2VhcG9uKSA9PiB7XG4gICAgICBjb25zdCBwb3NEaWZmWSA9IE1hdGguYWJzKHdlYXBvbi55IC0gd2VhcG9uLnAyLnkpO1xuICAgICAgbGV0IGRlYWRXZWFwb24gPSB3ZWFwb25zLmluZGV4T2Yod2VhcG9uKTtcblxuICAgICAgaWYgKCBwb3NEaWZmWSA8IDUgKSB7XG4gICAgICAgIHdlYXBvbnMuc3BsaWNlKGRlYWRXZWFwb24sIDEpO1xuICAgICAgICB0aGlzLnRhcmdldHMuc3BsaWNlKHdlYXBvbnMuZmluZEluZGV4KGluZGV4ID0+IGluZGV4KSwgMSk7XG4gICAgICAgIHRoaXMuZXhwbG9kZSh3ZWFwb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZXhwbG9zaW9uRGV0ZWN0aW9uKHRhcmdldHMpIHtcbiAgICB0YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgIHRoaXMuZW5lbXlNaXNzaWxlcy5mb3JFYWNoKHdlYXBvbiA9PiB7XG4gICAgICAgIGxldCBoeXBvRGlmZiA9IE1hdGguaHlwb3QodGFyZ2V0LnggLSB3ZWFwb24ueCwgdGFyZ2V0LnkgLSB3ZWFwb24ueSk7XG4gICAgICAgIGxldCBkZWFkV2VhcG9uID0gdGhpcy5lbmVteU1pc3NpbGVzLmluZGV4T2Yod2VhcG9uKTtcbiAgICAgICAgbGV0IGRlYWRUYXJnZXQgPSB0YXJnZXRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgXG4gICAgICAgIGlmICh3ZWFwb24uaXNDb2xsaWRpbmdXaXRoKHRhcmdldCkgJiYgdGFyZ2V0LnggPT09IHdlYXBvbi5wMi54IC0gMjUgJiYgd2VhcG9uLnkgPiA1MTApIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0cy5zcGxpY2UoZGVhZFRhcmdldCwgMSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaHlwb0RpZmYgPCB0YXJnZXQucmFkaXVzKSB7XG4gICAgICAgICAgdGhpcy5leHBsb2RlKHdlYXBvbik7XG4gICAgICAgICAgdGhpcy5lbmVteU1pc3NpbGVzLnNwbGljZShkZWFkV2VhcG9uLCAxKTtcbiAgICAgICAgICB0aGlzLnNjb3JlICs9IDI1ICogdGhpcy5sdmw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZGV0ZWN0Q29sbGlzaW9ucygpIHtcbiAgICBsZXQgZGV0ZWN0QXJyYXlzID0gW1xuICAgICAgdGhpcy5jaXRpZXMsXG4gICAgICB0aGlzLmJhdHRlcmllcyxcbiAgICAgIHRoaXMuZXhwbG9zaW9uc1xuICAgIF07XG5cbiAgICBkZXRlY3RBcnJheXMuZm9yRWFjaChhcnJheSA9PiB0aGlzLmV4cGxvc2lvbkRldGVjdGlvbihhcnJheSkpO1xuICB9XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4ID0gMCwgZHkgPSAwLCBkdiA9IDApIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmR4ID0gZHg7IFxuICAgIHRoaXMuZHkgPSBkeTsgXG4gICAgdGhpcy5kdiA9IGR2O1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAhKFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA8IG9iamVjdC54IHx8XG4gICAgICB0aGlzLnggPiBvYmplY3QueCArIG9iamVjdC53aWR0aCB8fCBcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0IDwgb2JqZWN0LnkgfHxcbiAgICAgIHRoaXMueSA+IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodFxuICAgICk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBpZiAoKHRoaXMuaXNNaXNzaWxlIHx8IHRoaXMuaXNFeHBsb3Npb24pICE9PSB0cnVlKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZSggeEFtb3VudCA9IHRoaXMuZHgsIHlBbW91bnQgPSB0aGlzLmR5KSB7XG4gICAgdGhpcy54ICs9IHhBbW91bnQgKiB0aGlzLmR2O1xuICAgIHRoaXMueSArPSB5QW1vdW50ICogdGhpcy5kdjtcbiAgfVxuICBcbn07XG5cbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVGFyZ2V0IGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4LCBkeSwgZHYsIGlzRXhwbG9zaW9uID0gZmFsc2UsIHJhZGl1cyA9IDApIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdik7XG4gICAgdGhpcy5jb3VudCA9IDgwO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMuaXNFeHBsb3Npb24gPSBpc0V4cGxvc2lvbjtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICAgIGNvbnN0IHsgeCwgeSwgaXNFeHBsb3Npb24sIHJhZGl1cyB9ID0gdGhpcztcbiAgIFxuICAgIGlmIChpc0V4cGxvc2lvbiA9PT0gdHJ1ZSkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAxMDAsIDApJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG59OyIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgV2VhcG9uIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4LCBkeSwgZHYgPSAwLjUsIHAxLCBwMiwgc3BlZWQsIGlzTWlzc2lsZSA9IGZhbHNlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4LCBkeSwgZHYgPSAwLjUpO1xuICAgIHRoaXMuZHYgPSBkdjtcbiAgICB0aGlzLnAxID0gcDE7XG4gICAgdGhpcy5wMiA9IHAyO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLmlzTWlzc2lsZSA9IGlzTWlzc2lsZTtcbiAgICAvLyBhbmdsZSBpbiBkZWdyZWVzXG4gICAgdGhpcy5hbmdsZSA9IE1hdGguYXRhbjIodGhpcy5wMi55IC0gdGhpcy5wMS55LCB0aGlzLnAyLnggLSB0aGlzLnAxLngpICogMTgwIC8gTWF0aC5QSTtcbiAgICAvLyBhbmdsZSBpbiByYWRpYW5zXG4gICAgdGhpcy5yYWRpYW5zID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XG4gICAgLy9Ib3cgbWFueSBtb3ZlcyB0byBtYWtlIGVhY2ggcmVkcmF3XG4gICAgdGhpcy54dW5pdHMgPSBNYXRoLmNvcyh0aGlzLnJhZGlhbnMpICogdGhpcy5zcGVlZDtcbiAgICB0aGlzLnl1bml0cyA9IE1hdGguc2luKHRoaXMucmFkaWFucykgKiB0aGlzLnNwZWVkO1xuICAgIHRoaXMudGFpbCA9IFtdO1xuICB9XG5cbiAgbWlzc2lsZVRhaWwoKSB7XG4gICAgY29uc3Qge3gsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCB0YWlsfSA9IHRoaXM7XG5cbiAgICBjb25zdCBzZWdtZW50ID0gXG4gICAgbmV3IEdhbWVQaWVjZSh4IC0gMywgeSAtIDMsIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCAwLCAwLCAwKTtcblxuICAgIHRhaWwucHVzaChzZWdtZW50KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICAgIGNvbnN0IHsgeCwgeSwgY29sb3IsIGlzTWlzc2lsZSB9ID0gdGhpcztcblxuICAgIGlmIChpc01pc3NpbGUgPT09IHRydWUpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMoeCwgeSwgMywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIFxuICBtb3ZlKCkge1xuICAgIHN1cGVyLm1vdmUoKTtcbiAgICAvLyB0aGlzLmN1cnJlbnRQb3MgPSB7eDpNYXRoLnJvdW5kKHRoaXMueCksIHk6TWF0aC5yb3VuZCh0aGlzLnkpfTtcbiAgICBpZiAodGhpcy5pc01pc3NpbGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMueCArPSB0aGlzLnh1bml0cztcbiAgICAgIHRoaXMueSArPSB0aGlzLnl1bml0cztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxufTsiLCJjb25zdCBoaWdoU2NvcmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoc2NvcmUnKTtcbmNvbnN0IGhpZ2hzY29yZVBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnRuJyk7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZ2FtZS5jdXJyZW50SGlnaFNjb3JlKCkpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBnYW1lLmN1cnJlbnRIaWdoU2NvcmUpO1xuXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGdhbWUuc2hvb3QoZSk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDgwKSB7XG4gICAgZ2FtZS50b2dnbGVQYXVzZSgpO1xuICB9XG59KTtcblxuaGlnaFNjb3JlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGdhbWUuc2V0SGlnaFNjb3JlKGhpZ2hzY29yZVBsYXllck5hbWUpO1xuICBoaWdoU2NvcmVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZ2FtZS5pc0dhbWVPdmVyID0gZmFsc2U7XG4gIGdhbWUubmV3R2FtZSgpO1xuICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgaWYgKGdhbWUucGF1c2VkKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiKDI1NSwgMCwgMCknO1xuICAgIGNvbnRleHQuZm9udCA9ICc0OHB4IHNlcmlmJztcbiAgICBjb250ZXh0LmZpbGxUZXh0KCdQQVVTRUQnLCAxOTUsIDMwMCk7XG4gIH0gZWxzZSB7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBnYW1lLmdhbWVMb29wKGhpZ2hTY29yZUlucHV0LCBzdGFydCwgY29udGV4dCk7XG4gIH1cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==