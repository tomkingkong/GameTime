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
      if (this.highScore === undefined) {
        this.highScore = { playerName: 'TCK', level: 1, score: 0 };
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhdHRlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL2xpYi9XZWFwb24uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRhcmdldCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiZHgiLCJkeSIsImR2IiwiaXNFeHBsb3Npb24iLCJjb3VudCIsIm1pc3NpbGVDb3VudCIsIkdhbWVQaWVjZSIsIkJhdHRlcnkiLCJXZWFwb24iLCJtaXNzaWxlcyIsImVuZW15TWlzc2lsZXMiLCJ0YXJnZXRzIiwiZXhwbG9zaW9ucyIsImNpdGllcyIsImJhdHRlcmllcyIsImx2bCIsImVuZW15V2VhcG9uQ291bnQiLCJwbGF5ZXJNaXNzaWxlQ291bnQiLCJpc0dhbWVPdmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJwbGF5ZXJOYW1lIiwibGV2ZWwiLCJwYXVzZWQiLCJoaWdoU2NvcmVJbnB1dCIsInN0YXJ0IiwiY3R4IiwiZ2FtZU92ZXIiLCJkcmF3T2JqZWN0cyIsImFuaW1hdGVNaXNzaWxlcyIsImRldGVjdENvbGxpc2lvbnMiLCJkcmF3VGV4dCIsImxlbmd0aCIsIm5ld0dhbWUiLCJlbmVteVNob290IiwiZXVyZWthIiwic2FuRnJhbmNpc2NvIiwic2FuTHVpc09iaXNwbyIsInNhbnRhQmFyYmFyYSIsImxvc0FuZ2VsYXMiLCJzYW5EaWVnbyIsImJhdHRlcnkxIiwiYmF0dGVyeTIiLCJiYXR0ZXJ5MyIsImVuZW15VGFyZ2V0cyIsInNldFBsYXllck1pc3NpbGVDb3VudCIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiYmF0dGVyeSIsImlucHV0IiwiYnV0dG9uIiwic3R5bGUiLCJkaXNwbGF5IiwiZmlsbFN0eWxlIiwiZm9udCIsImZpbGxUZXh0IiwibmFtZSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJiYXR0ZXJ5Q291bnRzIiwieFBvcyIsImZvckVhY2giLCJiYXRDb3VudCIsImRyYXdTY29yZSIsInJlY3QiLCJmaWxsIiwidGVycmFpbiIsImRyYXciLCJldmVudCIsImJhdHRlcnlYcG9zaXRpb25zIiwibWFwIiwiTWF0aCIsImFicyIsImxheWVyWCIsImNsb3Nlc3RCYXR0ZXJ5IiwiaW5kZXhPZiIsIm1pbiIsInZhbGlkQmF0dGVyeSIsImJhdHRlcnlQb3MiLCJmaW5kQmF0dGVyeSIsIm1vdXNlUG9zIiwibGF5ZXJZIiwibWlzc2lsZVRhcmdldCIsImNvdW50ZXJNaXNzaWxlIiwicHVzaCIsInAxIiwic3BsaWNlIiwibWF4IiwibWluaW11bSIsImNlaWwiLCJtYXhpbXVtIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Qb3MiLCJpIiwicGxheWVyVGFyZ2V0cyIsImVuZW15UG9zMSIsImVuZW15UG9zMiIsImVuZW15TWlzc2lsZSIsIndlYXBvbiIsImV4cGxvc2lvbiIsImdhbWVBcnJheXMiLCJnZW5lcmF0ZVRlcnJhaW4iLCJhcnJheSIsIm9iaiIsInNoaWZ0IiwibWlzc2lsZSIsIm1pc3NpbGVUYWlsIiwibW92ZSIsInRhaWwiLCJzZWciLCJvYmplY3RpdmVEZXRlY3Rpb24iLCJ3ZWFwb25zIiwicG9zRGlmZlkiLCJwMiIsImRlYWRXZWFwb24iLCJmaW5kSW5kZXgiLCJpbmRleCIsImV4cGxvZGUiLCJoeXBvRGlmZiIsImh5cG90IiwidGFyZ2V0IiwiZGVhZFRhcmdldCIsImlzQ29sbGlkaW5nV2l0aCIsInJhZGl1cyIsImRldGVjdEFycmF5cyIsImV4cGxvc2lvbkRldGVjdGlvbiIsIm9iamVjdCIsImlzTWlzc2lsZSIsImJlZ2luUGF0aCIsImZpbGxSZWN0IiwieEFtb3VudCIsInlBbW91bnQiLCJhcmMiLCJQSSIsImNsb3NlUGF0aCIsInNwZWVkIiwiYW5nbGUiLCJhdGFuMiIsInJhZGlhbnMiLCJ4dW5pdHMiLCJjb3MiLCJ5dW5pdHMiLCJzaW4iLCJzZWdtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlnaHNjb3JlUGxheWVyTmFtZSIsImNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiR2FtZSIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudEhpZ2hTY29yZSIsImUiLCJzaG9vdCIsImtleUNvZGUiLCJ0b2dnbGVQYXVzZSIsInByZXZlbnREZWZhdWx0Iiwic2V0SGlnaFNjb3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiY2xlYXJSZWN0IiwiZ2FtZUxvb3AiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7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LEdBSkQsTUFJTztBQUNMb0csWUFBUWUsU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QmhCLE9BQU83SixLQUEvQixFQUFzQzZKLE9BQU81SixNQUE3QztBQUNBZ0ssU0FBS2EsUUFBTCxDQUFjbkosY0FBZCxFQUE4QkMsS0FBOUIsRUFBcUNrSSxPQUFyQztBQUNEO0FBQ0RhLHdCQUFzQkMsTUFBdEI7QUFDRCxDQVZELEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IFRhcmdldCA9IHJlcXVpcmUoJy4vVGFyZ2V0LmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQmF0dGVyeSBleHRlbmRzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2LCBpc0V4cGxvc2lvbiA9IGZhbHNlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4LCBkeSwgZHYsIGlzRXhwbG9zaW9uID0gZmFsc2UpO1xuICAgIHRoaXMuY291bnQgPSBudWxsO1xuICAgIHRoaXMuaXNFeHBsb3Npb24gPSBpc0V4cGxvc2lvbjtcbiAgICB0aGlzLm1pc3NpbGVDb3VudCA9IDEwO1xuICB9XG59OyIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlLmpzJyk7XG5jb25zdCBCYXR0ZXJ5ID0gcmVxdWlyZSgnLi9CYXR0ZXJ5LmpzJyk7XG5jb25zdCBUYXJnZXQgPSByZXF1aXJlKCcuL1RhcmdldC5qcycpO1xuY29uc3QgV2VhcG9uID0gcmVxdWlyZSgnLi9XZWFwb24uanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5taXNzaWxlcyA9IFtdO1xuICAgIHRoaXMuZW5lbXlNaXNzaWxlcyA9IFtdO1xuICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xuICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xuICAgIHRoaXMuY2l0aWVzID0gW107XG4gICAgdGhpcy5iYXR0ZXJpZXMgPSBbXTtcbiAgICB0aGlzLmx2bCA9IDE7XG4gICAgdGhpcy5lbmVteVdlYXBvbkNvdW50ID0gKHRoaXMubHZsICogNSk7XG4gICAgdGhpcy5wbGF5ZXJNaXNzaWxlQ291bnQ7XG4gICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSB7cGxheWVyTmFtZTogJ1RDSycsIGxldmVsOiAxLCBzY29yZTogMH07XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdhbWVMb29wKGhpZ2hTY29yZUlucHV0LCBzdGFydCwgY3R4KSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgdGhpcy5nYW1lT3ZlcihjdHgsIGhpZ2hTY29yZUlucHV0LCBzdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd09iamVjdHMoY3R4KTtcbiAgICAgIHRoaXMuYW5pbWF0ZU1pc3NpbGVzKHRoaXMubWlzc2lsZXMsIGN0eCk7XG4gICAgICB0aGlzLmFuaW1hdGVNaXNzaWxlcyh0aGlzLmVuZW15TWlzc2lsZXMsIGN0eCk7XG4gICAgICB0aGlzLmRldGVjdENvbGxpc2lvbnMoKTtcbiAgICAgIHRoaXMuZHJhd1RleHQoY3R4KTtcbiAgICB9XG4gIFxuICAgIGlmICh0aGlzLmNpdGllcy5sZW5ndGggPT09IDAgJiYgdGhpcy5lbmVteU1pc3NpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2l0aWVzLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmVuZW15TWlzc2lsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmx2bCsrO1xuICAgICAgdGhpcy5uZXdHYW1lKCk7XG4gICAgICB0aGlzLmVuZW15U2hvb3QoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVQYXVzZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgfVxuIFxuICBuZXdHYW1lKCkge1xuICAgIGNvbnN0IGV1cmVrYSA9IG5ldyBUYXJnZXQoNjAsIDUwNSwgNDAsIDMwLCAncmdiKDAsIDIwMCwgMjAwKScsIGZhbHNlKTtcbiAgICBjb25zdCBzYW5GcmFuY2lzY28gPSBuZXcgVGFyZ2V0KDEzNSwgNTEwLCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IHNhbkx1aXNPYmlzcG8gPSBuZXcgVGFyZ2V0KDIxMCwgNTE1LCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IHNhbnRhQmFyYmFyYSA9IG5ldyBUYXJnZXQoMzYwLCA1MTAsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3QgbG9zQW5nZWxhcyA9IG5ldyBUYXJnZXQoNDMwLCA1MDAsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3Qgc2FuRGllZ28gPSBuZXcgVGFyZ2V0KDUwMCwgNTE1LCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IGJhdHRlcnkxID0gbmV3IEJhdHRlcnkoMCwgNDkwLCA2MCwgNjAsICdyZ2IoMjAwLCAyMDAsIDApJywgZmFsc2UsIDEwKTtcbiAgICBjb25zdCBiYXR0ZXJ5MiA9IG5ldyBCYXR0ZXJ5KDI3MCwgNDkwLCA3MCwgNjAsICdyZ2IoMjAwLCAyMDAsIDApJywgZmFsc2UsIDEwKTtcbiAgICBjb25zdCBiYXR0ZXJ5MyA9IG5ldyBCYXR0ZXJ5KDU0MCwgNDkwLCA2MCwgNjAsICdyZ2IoMjAwLCAyMDAsIDApJywgZmFsc2UsIDEwKTtcbiAgICBcbiAgICBpZiAodGhpcy5sdmwgPT09IDEpIHtcbiAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgdGhpcy5jaXRpZXMgPSBbZXVyZWthLCBzYW5GcmFuY2lzY28sIHNhbkx1aXNPYmlzcG8sIHNhbnRhQmFyYmFyYSwgbG9zQW5nZWxhcywgc2FuRGllZ29dO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jaXRpZXMgIT09IDApIHtcbiAgICAgIHRoaXMuc2NvcmUgKz0gKHRoaXMucGxheWVyTWlzc2lsZUNvdW50ICogNSk7XG4gICAgICB0aGlzLmVuZW15VGFyZ2V0cyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmJhdHRlcmllcyA9IFtiYXR0ZXJ5MSwgYmF0dGVyeTIsIGJhdHRlcnkzXTtcbiAgICB0aGlzLnNldFBsYXllck1pc3NpbGVDb3VudCgpO1xuICAgIHRoaXMuZW5lbXlTaG9vdCgpO1xuICB9XG5cbiAgc2V0UGxheWVyTWlzc2lsZUNvdW50KCkge1xuICAgIHRoaXMucGxheWVyTWlzc2lsZUNvdW50ID0gdGhpcy5iYXR0ZXJpZXMucmVkdWNlKChhY2N1bXVsYXRvciwgYmF0dGVyeSkgPT4ge1xuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgYmF0dGVyeS5taXNzaWxlQ291bnQ7XG4gICAgfSwgMCk7XG4gIH1cblxuICBnYW1lT3ZlcihjdHgsIGlucHV0LCBidXR0b24pIHtcbiAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDAsIDApJztcbiAgICBjdHguZm9udCA9ICc0OHB4IHNlcmlmJztcblxuICAgIGlmICh0aGlzLmhpZ2hTY29yZS5zY29yZSA8IHRoaXMuc2NvcmUpIHtcbiAgICAgIGN0eC5maWxsVGV4dCgnSElHSCBTQ09SRSEnLCAxNTAsIDMwMCk7XG4gICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY29yZSAhPT0gMCkge1xuICAgICAgdGhpcy5sdmwgPSAxO1xuICAgICAgY3R4LmZpbGxUZXh0KCdUSEUgRU5EJywgMTk1LCAzMDApO1xuICAgIH1cbiAgfVxuXG4gIHNldEhpZ2hTY29yZShuYW1lKSB7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSB7XG4gICAgICBwbGF5ZXJOYW1lOiBuYW1lLnZhbHVlLFxuICAgICAgbGV2ZWw6IHRoaXMubHZsLFxuICAgICAgc2NvcmU6IHRoaXMuc2NvcmVcbiAgICB9O1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hzY29yZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuaGlnaFNjb3JlKSk7XG4gIH1cblxuICBjdXJyZW50SGlnaFNjb3JlKCkge1xuICAgIHRoaXMuaGlnaFNjb3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJykpO1xuICAgIGlmICh0aGlzLmhpZ2hTY29yZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmhpZ2hTY29yZSA9IHtwbGF5ZXJOYW1lOiAnVENLJywgbGV2ZWw6IDEsIHNjb3JlOiAwfTtcbiAgICB9XG4gIH1cblxuICBkcmF3VGV4dChjdHgpIHtcbiAgICBjb25zdCBiYXR0ZXJ5Q291bnRzID0gW1xuICAgICAge2NvdW50OiAnT1VUJywgeDogMCwgeFBvczogMTB9LCBcbiAgICAgIHtjb3VudDogJ09VVCcsIHg6IDI3MCwgeFBvczogMjg1fSwgXG4gICAgICB7Y291bnQ6ICdPVVQnLCB4OiA1NDAsIHhQb3M6IDU1MH1cbiAgICBdO1xuICAgIFxuICAgIGlmICh0aGlzLmJhdHRlcmllcy5sZW5ndGggIT09IDApIHtcbiAgICAgIGJhdHRlcnlDb3VudHMuZm9yRWFjaCgoYmF0Q291bnQpID0+IHsgXG4gICAgICAgIHRoaXMuYmF0dGVyaWVzLmZvckVhY2goKGJhdHRlcnkpID0+IHsgXG4gICAgICAgICAgaWYgKGJhdHRlcnkueCA9PT0gYmF0Q291bnQueCkge1xuICAgICAgICAgICAgcmV0dXJuIGJhdENvdW50LmNvdW50ID0gYmF0dGVyeS5taXNzaWxlQ291bnQ7IFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwgMjAwLCAyMDApJztcbiAgICBjdHguZm9udCA9ICcyMHB4IHNhbnMtc2VyaWYnO1xuICAgIGJhdHRlcnlDb3VudHMuZm9yRWFjaChjb3VudCA9PiBjdHguZmlsbFRleHQoY291bnQuY291bnQsIGNvdW50LnhQb3MgKyA2LCA1NzApKTtcbiAgICB0aGlzLmRyYXdTY29yZShjdHgpO1xuICB9XG5cbiAgZHJhd1Njb3JlKGN0eCkge1xuICAgIGN0eC5mb250ID0gJzE4cHggc2Fucy1zZXJpZic7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoNSwgMzIsIDc4KSc7XG4gICAgY3R4LnJlY3QoMCwgMCwgNjAwLCA0MCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDI1NSwgMjU1KSc7XG4gICAgY3R4LmZpbGxUZXh0KGBsZXZlbDogJHt0aGlzLmx2bH1gLCAzMCwgMjgpOyAgXG4gICAgY3R4LmZpbGxUZXh0KGBzY29yZTogJHt0aGlzLnNjb3JlfWAsIDEyMCwgMjgpO1xuICAgIGN0eC5maWxsVGV4dChgaGlnaCBzY29yZTogJHt0aGlzLmhpZ2hTY29yZS5wbGF5ZXJOYW1lfSB8ICR7dGhpcy5oaWdoU2NvcmUuc2NvcmV9YCwgMzIwLCAyOCk7XG4gIH1cblxuICBnZW5lcmF0ZVRlcnJhaW4oY3R4KSB7XG4gICAgY29uc3QgdGVycmFpbiA9IG5ldyBHYW1lUGllY2UoMCwgNTIwLCA2MDAsIDgwLCAncmdiKDI1NSwgMjU1LCAwKScsIDApO1xuXG4gICAgdGVycmFpbi5kcmF3KGN0eCk7XG4gIH1cblxuICBmaW5kQmF0dGVyeShldmVudCkge1xuICAgIGNvbnN0IHtiYXR0ZXJpZXN9ID0gdGhpcztcbiAgICBsZXQgYmF0dGVyeVhwb3NpdGlvbnMgPSBiYXR0ZXJpZXMubWFwKGJhdHRlcnkgPT4gTWF0aC5hYnMoYmF0dGVyeS54IC0gZXZlbnQubGF5ZXJYKSk7XG4gICAgbGV0IGNsb3Nlc3RCYXR0ZXJ5ID0gYmF0dGVyeVhwb3NpdGlvbnMuaW5kZXhPZihNYXRoLm1pbiguLi5iYXR0ZXJ5WHBvc2l0aW9ucykpO1xuICAgIGxldCB2YWxpZEJhdHRlcnkgPSBiYXR0ZXJpZXNbY2xvc2VzdEJhdHRlcnldO1xuICAgIGxldCB4UG9zID0gdmFsaWRCYXR0ZXJ5LnggKyAzMDtcblxuICAgIHJldHVybiB7eDogeFBvcywgeTogNDkwfTtcbiAgfVxuXG4gIHNob290KGV2ZW50KSB7XG4gICAgY29uc3Qge2JhdHRlcmllcywgdGFyZ2V0cywgbWlzc2lsZXN9ID0gdGhpcztcbiAgICBjb25zdCBiYXR0ZXJ5UG9zID0gdGhpcy5maW5kQmF0dGVyeShldmVudCk7XG4gICAgY29uc3QgbW91c2VQb3MgPSB7eDogZXZlbnQubGF5ZXJYLCB5OiBldmVudC5sYXllcll9O1xuICAgIGNvbnN0IG1pc3NpbGVUYXJnZXQgPSBuZXcgVGFyZ2V0KG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIDEwLCAxMCwgJ3JnYigyMDAsIDI1MCwgMjUpJywgMCwgMCk7XG5cbiAgICBtb3VzZVBvcy55ID4gNDM4ID8gbWlzc2lsZVRhcmdldC55ID0gNDM1IDogZXZlbnQubGF5ZXJZO1xuICAgIFxuICAgIGNvbnN0IGNvdW50ZXJNaXNzaWxlID0gbmV3IFdlYXBvbihiYXR0ZXJ5UG9zLngsIDQ5MCwgNSwgNSwgJ3JnYigwLCAyMDAsIDIwMCknLCAwLCAwLCAxMiwgYmF0dGVyeVBvcywgeyB4OiBtb3VzZVBvcy54ICsgNSwgeTogbWlzc2lsZVRhcmdldC55ICsgNX0sIDEwLCB0cnVlKTtcbiAgXG4gICAgdGFyZ2V0cy5wdXNoKG1pc3NpbGVUYXJnZXQpO1xuICAgIG1pc3NpbGVzLnB1c2goY291bnRlck1pc3NpbGUpO1xuXG4gICAgYmF0dGVyaWVzLmZvckVhY2goYmF0dGVyeSA9PiB7XG4gICAgICBpZiAoYmF0dGVyeS54ID09PSBjb3VudGVyTWlzc2lsZS5wMS54IC0gMzApIHtcbiAgICAgICAgYmF0dGVyeS5taXNzaWxlQ291bnQgLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChiYXR0ZXJ5Lm1pc3NpbGVDb3VudCA9PT0gMCkge1xuICAgICAgICBiYXR0ZXJpZXMuc3BsaWNlKGJhdHRlcmllcy5pbmRleE9mKGJhdHRlcnkpLCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFBsYXllck1pc3NpbGVDb3VudCgpO1xuICB9XG5cbiAgcmFuZG9tUG9zKG1pbiwgbWF4KSB7XG4gICAgY29uc3QgbWluaW11bSA9IE1hdGguY2VpbChtaW4pO1xuICAgIGNvbnN0IG1heGltdW0gPSBNYXRoLmZsb29yKG1heCk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heGltdW0gLSBtaW5pbXVtICsgMSkpICsgbWluaW11bTtcbiAgfVxuXG4gIGVuZW15U2hvb3QoKSB7XG4gICAgY29uc3Qge2VuZW15V2VhcG9uQ291bnQsIGVuZW15TWlzc2lsZXMsIHJhbmRvbVBvc30gPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmVteVdlYXBvbkNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHBsYXllclRhcmdldHMgPSBbNjAsIDEzNSwgMjEwLCAzNjAsIDQzMCwgNTAwLCAwLCAyNzAsIDU0MF07XG4gICAgICBjb25zdCBlbmVteVBvczEgPSB7IHg6IHJhbmRvbVBvcygxMCwgNTkwKSwgeTogcmFuZG9tUG9zKC01MDAsIC0xMDApIH07XG4gICAgICBjb25zdCBlbmVteVBvczIgPSB7IHg6IHBsYXllclRhcmdldHNbIHJhbmRvbVBvcygwLCA4KSBdICsgMjUsIHk6IDUyMCB9O1xuICAgICAgY29uc3QgZW5lbXlNaXNzaWxlID0gXG4gICAgICBuZXcgV2VhcG9uKGVuZW15UG9zMS54LCBlbmVteVBvczEueSwgNSwgNSwgJ3JnYigyNTUsIDAsIDApJywgMCwgMCwgMCwgZW5lbXlQb3MxLCBlbmVteVBvczIsIDEsIHRydWUpO1xuXG4gICAgICBlbmVteU1pc3NpbGVzLnB1c2goZW5lbXlNaXNzaWxlKTtcbiAgICB9XG4gIH1cblxuICBleHBsb2RlKHdlYXBvbikge1xuICAgIGNvbnN0IGV4cGxvc2lvbiA9IFxuICAgIG5ldyBUYXJnZXQod2VhcG9uLngsIHdlYXBvbi55LCAzMCwgMzAsICdyZ2IoMjU1LCAxMDAsIDApJywgMCwgMCwgMCwgdHJ1ZSwgMjUpO1xuICAgIFxuICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKGV4cGxvc2lvbik7XG4gIH1cblxuICBkcmF3T2JqZWN0cyhjdHgpIHtcbiAgICBjb25zdCBnYW1lQXJyYXlzID0gW1xuICAgICAgdGhpcy5lbmVteU1pc3NpbGVzLFxuICAgICAgdGhpcy5leHBsb3Npb25zLFxuICAgICAgdGhpcy5iYXR0ZXJpZXMsXG4gICAgICB0aGlzLm1pc3NpbGVzLFxuICAgICAgdGhpcy50YXJnZXRzLFxuICAgICAgdGhpcy5jaXRpZXNcbiAgICBdO1xuXG4gICAgdGhpcy5nZW5lcmF0ZVRlcnJhaW4oY3R4KTtcblxuICAgIGdhbWVBcnJheXMuZm9yRWFjaChhcnJheSA9PiBhcnJheS5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBvYmouY291bnQgPT09IDAgJiYgb2JqLmlzRXhwbG9zaW9uID09PSB0cnVlIFxuICAgICAgICA/IHRoaXMuZXhwbG9zaW9ucy5zaGlmdChvYmopIFxuICAgICAgICA6IG9iai5jb3VudC0tICYmIG9iai5kcmF3KGN0eCk7IFxuICAgIH0pKTtcbiAgfVxuXG4gIGFuaW1hdGVNaXNzaWxlcyhhcnJheSwgY3R4KSB7XG4gICAgYXJyYXkuZm9yRWFjaCgobWlzc2lsZSkgPT4ge1xuICAgICAgbWlzc2lsZS5taXNzaWxlVGFpbCgpO1xuICAgICAgbWlzc2lsZS5tb3ZlKCk7XG4gICAgICBtaXNzaWxlLmRyYXcoY3R4KTtcbiAgICAgIG1pc3NpbGUudGFpbC5mb3JFYWNoKHNlZyA9PiBzZWcuZHJhdyhjdHgpKTtcbiAgICAgIHRoaXMub2JqZWN0aXZlRGV0ZWN0aW9uKGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9iamVjdGl2ZURldGVjdGlvbih3ZWFwb25zKSB7XG4gICAgd2VhcG9ucy5mb3JFYWNoKCh3ZWFwb24pID0+IHtcbiAgICAgIGNvbnN0IHBvc0RpZmZZID0gTWF0aC5hYnMod2VhcG9uLnkgLSB3ZWFwb24ucDIueSk7XG4gICAgICBsZXQgZGVhZFdlYXBvbiA9IHdlYXBvbnMuaW5kZXhPZih3ZWFwb24pO1xuXG4gICAgICBpZiAoIHBvc0RpZmZZIDwgNSApIHtcbiAgICAgICAgd2VhcG9ucy5zcGxpY2UoZGVhZFdlYXBvbiwgMSk7XG4gICAgICAgIHRoaXMudGFyZ2V0cy5zcGxpY2Uod2VhcG9ucy5maW5kSW5kZXgoaW5kZXggPT4gaW5kZXgpLCAxKTtcbiAgICAgICAgdGhpcy5leHBsb2RlKHdlYXBvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBleHBsb3Npb25EZXRlY3Rpb24odGFyZ2V0cykge1xuICAgIHRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgdGhpcy5lbmVteU1pc3NpbGVzLmZvckVhY2god2VhcG9uID0+IHtcbiAgICAgICAgbGV0IGh5cG9EaWZmID0gTWF0aC5oeXBvdCh0YXJnZXQueCAtIHdlYXBvbi54LCB0YXJnZXQueSAtIHdlYXBvbi55KTtcbiAgICAgICAgbGV0IGRlYWRXZWFwb24gPSB0aGlzLmVuZW15TWlzc2lsZXMuaW5kZXhPZih3ZWFwb24pO1xuICAgICAgICBsZXQgZGVhZFRhcmdldCA9IHRhcmdldHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHdlYXBvbi5pc0NvbGxpZGluZ1dpdGgodGFyZ2V0KSAmJiB0YXJnZXQueCA9PT0gd2VhcG9uLnAyLnggLSAyNSAmJiB3ZWFwb24ueSA+IDUxMCkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRzLnNwbGljZShkZWFkVGFyZ2V0LCAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChoeXBvRGlmZiA8IHRhcmdldC5yYWRpdXMpIHtcbiAgICAgICAgICB0aGlzLmV4cGxvZGUod2VhcG9uKTtcbiAgICAgICAgICB0aGlzLmVuZW15TWlzc2lsZXMuc3BsaWNlKGRlYWRXZWFwb24sIDEpO1xuICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMjUgKiB0aGlzLmx2bDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXRlY3RDb2xsaXNpb25zKCkge1xuICAgIGxldCBkZXRlY3RBcnJheXMgPSBbXG4gICAgICB0aGlzLmNpdGllcyxcbiAgICAgIHRoaXMuYmF0dGVyaWVzLFxuICAgICAgdGhpcy5leHBsb3Npb25zXG4gICAgXTtcblxuICAgIGRldGVjdEFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHRoaXMuZXhwbG9zaW9uRGV0ZWN0aW9uKGFycmF5KSk7XG4gIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHggPSAwLCBkeSA9IDAsIGR2ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHggPSBkeDsgXG4gICAgdGhpcy5keSA9IGR5OyBcbiAgICB0aGlzLmR2ID0gZHY7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuICEoXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoIDwgb2JqZWN0LnggfHxcbiAgICAgIHRoaXMueCA+IG9iamVjdC54ICsgb2JqZWN0LndpZHRoIHx8IFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPCBvYmplY3QueSB8fFxuICAgICAgdGhpcy55ID4gb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9ID0gdGhpcztcblxuICAgIGlmICgodGhpcy5pc01pc3NpbGUgfHwgdGhpcy5pc0V4cGxvc2lvbikgIT09IHRydWUpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBtb3ZlKCB4QW1vdW50ID0gdGhpcy5keCwgeUFtb3VudCA9IHRoaXMuZHkpIHtcbiAgICB0aGlzLnggKz0geEFtb3VudCAqIHRoaXMuZHY7XG4gICAgdGhpcy55ICs9IHlBbW91bnQgKiB0aGlzLmR2O1xuICB9XG4gIFxufTtcblxuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiwgaXNFeHBsb3Npb24gPSBmYWxzZSwgcmFkaXVzID0gMCkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2KTtcbiAgICB0aGlzLmNvdW50ID0gODA7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5pc0V4cGxvc2lvbiA9IGlzRXhwbG9zaW9uO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgY29uc3QgeyB4LCB5LCBpc0V4cGxvc2lvbiwgcmFkaXVzIH0gPSB0aGlzO1xuICAgXG4gICAgaWYgKGlzRXhwbG9zaW9uID09PSB0cnVlKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDEwMCwgMCknO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbn07IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXZWFwb24gZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiA9IDAuNSwgcDEsIHAyLCBzcGVlZCwgaXNNaXNzaWxlID0gZmFsc2UpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiA9IDAuNSk7XG4gICAgdGhpcy5kdiA9IGR2O1xuICAgIHRoaXMucDEgPSBwMTtcbiAgICB0aGlzLnAyID0gcDI7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuaXNNaXNzaWxlID0gaXNNaXNzaWxlO1xuICAgIC8vIGFuZ2xlIGluIGRlZ3JlZXNcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5hdGFuMih0aGlzLnAyLnkgLSB0aGlzLnAxLnksIHRoaXMucDIueCAtIHRoaXMucDEueCkgKiAxODAgLyBNYXRoLlBJO1xuICAgIC8vIGFuZ2xlIGluIHJhZGlhbnNcbiAgICB0aGlzLnJhZGlhbnMgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbiAgICAvL0hvdyBtYW55IG1vdmVzIHRvIG1ha2UgZWFjaCByZWRyYXdcbiAgICB0aGlzLnh1bml0cyA9IE1hdGguY29zKHRoaXMucmFkaWFucykgKiB0aGlzLnNwZWVkO1xuICAgIHRoaXMueXVuaXRzID0gTWF0aC5zaW4odGhpcy5yYWRpYW5zKSAqIHRoaXMuc3BlZWQ7XG4gICAgdGhpcy50YWlsID0gW107XG4gIH1cblxuICBtaXNzaWxlVGFpbCgpIHtcbiAgICBjb25zdCB7eCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIHRhaWx9ID0gdGhpcztcblxuICAgIGNvbnN0IHNlZ21lbnQgPSBcbiAgICBuZXcgR2FtZVBpZWNlKHggLSAzLCB5IC0gMywgd2lkdGgsIGhlaWdodCwgY29sb3IsIDAsIDAsIDApO1xuXG4gICAgdGFpbC5wdXNoKHNlZ21lbnQpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgY29uc3QgeyB4LCB5LCBjb2xvciwgaXNNaXNzaWxlIH0gPSB0aGlzO1xuXG4gICAgaWYgKGlzTWlzc2lsZSA9PT0gdHJ1ZSkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh4LCB5LCAzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgXG4gIG1vdmUoKSB7XG4gICAgc3VwZXIubW92ZSgpO1xuICAgIC8vIHRoaXMuY3VycmVudFBvcyA9IHt4Ok1hdGgucm91bmQodGhpcy54KSwgeTpNYXRoLnJvdW5kKHRoaXMueSl9O1xuICAgIGlmICh0aGlzLmlzTWlzc2lsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy54ICs9IHRoaXMueHVuaXRzO1xuICAgICAgdGhpcy55ICs9IHRoaXMueXVuaXRzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG59OyIsImNvbnN0IGhpZ2hTY29yZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hzY29yZScpO1xuY29uc3QgaGlnaHNjb3JlUGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idG4nKTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBnYW1lLmN1cnJlbnRIaWdoU2NvcmUoKSk7XG5cbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgZ2FtZS5zaG9vdChlKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gODApIHtcbiAgICBnYW1lLnRvZ2dsZVBhdXNlKCk7XG4gIH1cbn0pO1xuXG5oaWdoU2NvcmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZ2FtZS5zZXRIaWdoU2NvcmUoaGlnaHNjb3JlUGxheWVyTmFtZSk7XG4gIGhpZ2hTY29yZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5zdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBnYW1lLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgZ2FtZS5uZXdHYW1lKCk7XG4gIHN0YXJ0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gdXBkYXRlKCkge1xuICBpZiAoZ2FtZS5wYXVzZWQpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAwLCAwKSc7XG4gICAgY29udGV4dC5mb250ID0gJzQ4cHggc2VyaWYnO1xuICAgIGNvbnRleHQuZmlsbFRleHQoJ1BBVVNFRCcsIDE5NSwgMzAwKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGdhbWUuZ2FtZUxvb3AoaGlnaFNjb3JlSW5wdXQsIHN0YXJ0LCBjb250ZXh0KTtcbiAgfVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9