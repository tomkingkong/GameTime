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
      var currentHigh = JSON.parse(localStorage.getItem('highscore'));
      if (currentHigh === null) {
        this.highScore = this.highScore;
      } else {
        this.highScore = currentHigh;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhdHRlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL2xpYi9XZWFwb24uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRhcmdldCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiZHgiLCJkeSIsImR2IiwiaXNFeHBsb3Npb24iLCJjb3VudCIsIm1pc3NpbGVDb3VudCIsIkdhbWVQaWVjZSIsIkJhdHRlcnkiLCJXZWFwb24iLCJtaXNzaWxlcyIsImVuZW15TWlzc2lsZXMiLCJ0YXJnZXRzIiwiZXhwbG9zaW9ucyIsImNpdGllcyIsImJhdHRlcmllcyIsImx2bCIsImVuZW15V2VhcG9uQ291bnQiLCJwbGF5ZXJNaXNzaWxlQ291bnQiLCJpc0dhbWVPdmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJwbGF5ZXJOYW1lIiwibGV2ZWwiLCJwYXVzZWQiLCJoaWdoU2NvcmVJbnB1dCIsInN0YXJ0IiwiY3R4IiwiZ2FtZU92ZXIiLCJkcmF3T2JqZWN0cyIsImFuaW1hdGVNaXNzaWxlcyIsImRldGVjdENvbGxpc2lvbnMiLCJkcmF3VGV4dCIsImxlbmd0aCIsIm5ld0dhbWUiLCJlbmVteVNob290IiwiZXVyZWthIiwic2FuRnJhbmNpc2NvIiwic2FuTHVpc09iaXNwbyIsInNhbnRhQmFyYmFyYSIsImxvc0FuZ2VsYXMiLCJzYW5EaWVnbyIsImJhdHRlcnkxIiwiYmF0dGVyeTIiLCJiYXR0ZXJ5MyIsImVuZW15VGFyZ2V0cyIsInNldFBsYXllck1pc3NpbGVDb3VudCIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiYmF0dGVyeSIsImlucHV0IiwiYnV0dG9uIiwic3R5bGUiLCJkaXNwbGF5IiwiZmlsbFN0eWxlIiwiZm9udCIsImZpbGxUZXh0IiwibmFtZSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjdXJyZW50SGlnaCIsInBhcnNlIiwiZ2V0SXRlbSIsImJhdHRlcnlDb3VudHMiLCJ4UG9zIiwiZm9yRWFjaCIsImJhdENvdW50IiwiZHJhd1Njb3JlIiwicmVjdCIsImZpbGwiLCJ0ZXJyYWluIiwiZHJhdyIsImV2ZW50IiwiYmF0dGVyeVhwb3NpdGlvbnMiLCJtYXAiLCJNYXRoIiwiYWJzIiwibGF5ZXJYIiwiY2xvc2VzdEJhdHRlcnkiLCJpbmRleE9mIiwibWluIiwidmFsaWRCYXR0ZXJ5IiwiYmF0dGVyeVBvcyIsImZpbmRCYXR0ZXJ5IiwibW91c2VQb3MiLCJsYXllclkiLCJtaXNzaWxlVGFyZ2V0IiwiY291bnRlck1pc3NpbGUiLCJwdXNoIiwicDEiLCJzcGxpY2UiLCJtYXgiLCJtaW5pbXVtIiwiY2VpbCIsIm1heGltdW0iLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVBvcyIsImkiLCJwbGF5ZXJUYXJnZXRzIiwiZW5lbXlQb3MxIiwiZW5lbXlQb3MyIiwiZW5lbXlNaXNzaWxlIiwid2VhcG9uIiwiZXhwbG9zaW9uIiwiZ2FtZUFycmF5cyIsImdlbmVyYXRlVGVycmFpbiIsImFycmF5Iiwib2JqIiwic2hpZnQiLCJtaXNzaWxlIiwibWlzc2lsZVRhaWwiLCJtb3ZlIiwidGFpbCIsInNlZyIsIm9iamVjdGl2ZURldGVjdGlvbiIsIndlYXBvbnMiLCJwb3NEaWZmWSIsInAyIiwiZGVhZFdlYXBvbiIsImZpbmRJbmRleCIsImluZGV4IiwiZXhwbG9kZSIsImh5cG9EaWZmIiwiaHlwb3QiLCJ0YXJnZXQiLCJkZWFkVGFyZ2V0IiwiaXNDb2xsaWRpbmdXaXRoIiwicmFkaXVzIiwiZGV0ZWN0QXJyYXlzIiwiZXhwbG9zaW9uRGV0ZWN0aW9uIiwib2JqZWN0IiwiaXNNaXNzaWxlIiwiYmVnaW5QYXRoIiwiZmlsbFJlY3QiLCJ4QW1vdW50IiwieUFtb3VudCIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwic3BlZWQiLCJhbmdsZSIsImF0YW4yIiwicmFkaWFucyIsInh1bml0cyIsImNvcyIsInl1bml0cyIsInNpbiIsInNlZ21lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoaWdoc2NvcmVQbGF5ZXJOYW1lIiwiY2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJHYW1lIiwiZ2FtZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50SGlnaFNjb3JlIiwiZSIsInNob290Iiwia2V5Q29kZSIsInRvZ2dsZVBhdXNlIiwicHJldmVudERlZmF1bHQiLCJzZXRIaWdoU2NvcmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJjbGVhclJlY3QiLCJnYW1lTG9vcCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7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RyxZQUFRZSxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCaEIsT0FBTzdKLEtBQS9CLEVBQXNDNkosT0FBTzVKLE1BQTdDO0FBQ0FnSyxTQUFLYSxRQUFMLENBQWNuSixjQUFkLEVBQThCQyxLQUE5QixFQUFxQ2tJLE9BQXJDO0FBQ0Q7QUFDRGEsd0JBQXNCQyxNQUF0QjtBQUNELENBVkQsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgVGFyZ2V0ID0gcmVxdWlyZSgnLi9UYXJnZXQuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBCYXR0ZXJ5IGV4dGVuZHMgVGFyZ2V0IHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4LCBkeSwgZHYsIGlzRXhwbG9zaW9uID0gZmFsc2UpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiwgaXNFeHBsb3Npb24gPSBmYWxzZSk7XG4gICAgdGhpcy5jb3VudCA9IG51bGw7XG4gICAgdGhpcy5pc0V4cGxvc2lvbiA9IGlzRXhwbG9zaW9uO1xuICAgIHRoaXMubWlzc2lsZUNvdW50ID0gMTA7XG4gIH1cbn07IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcbmNvbnN0IEJhdHRlcnkgPSByZXF1aXJlKCcuL0JhdHRlcnkuanMnKTtcbmNvbnN0IFRhcmdldCA9IHJlcXVpcmUoJy4vVGFyZ2V0LmpzJyk7XG5jb25zdCBXZWFwb24gPSByZXF1aXJlKCcuL1dlYXBvbi5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1pc3NpbGVzID0gW107XG4gICAgdGhpcy5lbmVteU1pc3NpbGVzID0gW107XG4gICAgdGhpcy50YXJnZXRzID0gW107XG4gICAgdGhpcy5leHBsb3Npb25zID0gW107XG4gICAgdGhpcy5jaXRpZXMgPSBbXTtcbiAgICB0aGlzLmJhdHRlcmllcyA9IFtdO1xuICAgIHRoaXMubHZsID0gMTtcbiAgICB0aGlzLmVuZW15V2VhcG9uQ291bnQgPSAodGhpcy5sdmwgKiA1KTtcbiAgICB0aGlzLnBsYXllck1pc3NpbGVDb3VudDtcbiAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLmhpZ2hTY29yZSA9IHtwbGF5ZXJOYW1lOiAnVENLJywgbGV2ZWw6IDEsIHNjb3JlOiAwfTtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2FtZUxvb3AoaGlnaFNjb3JlSW5wdXQsIHN0YXJ0LCBjdHgpIHtcbiAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICB0aGlzLmdhbWVPdmVyKGN0eCwgaGlnaFNjb3JlSW5wdXQsIHN0YXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3T2JqZWN0cyhjdHgpO1xuICAgICAgdGhpcy5hbmltYXRlTWlzc2lsZXModGhpcy5taXNzaWxlcywgY3R4KTtcbiAgICAgIHRoaXMuYW5pbWF0ZU1pc3NpbGVzKHRoaXMuZW5lbXlNaXNzaWxlcywgY3R4KTtcbiAgICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9ucygpO1xuICAgICAgdGhpcy5kcmF3VGV4dChjdHgpO1xuICAgIH1cbiAgXG4gICAgaWYgKHRoaXMuY2l0aWVzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmVuZW15TWlzc2lsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jaXRpZXMubGVuZ3RoICE9PSAwICYmIHRoaXMuZW5lbXlNaXNzaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMubHZsKys7XG4gICAgICB0aGlzLm5ld0dhbWUoKTtcbiAgICAgIHRoaXMuZW5lbXlTaG9vdCgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVBhdXNlKCkge1xuICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuICB9XG4gXG4gIG5ld0dhbWUoKSB7XG4gICAgY29uc3QgZXVyZWthID0gbmV3IFRhcmdldCg2MCwgNTA1LCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IHNhbkZyYW5jaXNjbyA9IG5ldyBUYXJnZXQoMTM1LCA1MTAsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3Qgc2FuTHVpc09iaXNwbyA9IG5ldyBUYXJnZXQoMjEwLCA1MTUsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3Qgc2FudGFCYXJiYXJhID0gbmV3IFRhcmdldCgzNjAsIDUxMCwgNDAsIDMwLCAncmdiKDAsIDIwMCwgMjAwKScsIGZhbHNlKTtcbiAgICBjb25zdCBsb3NBbmdlbGFzID0gbmV3IFRhcmdldCg0MzAsIDUwMCwgNDAsIDMwLCAncmdiKDAsIDIwMCwgMjAwKScsIGZhbHNlKTtcbiAgICBjb25zdCBzYW5EaWVnbyA9IG5ldyBUYXJnZXQoNTAwLCA1MTUsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3QgYmF0dGVyeTEgPSBuZXcgQmF0dGVyeSgwLCA0OTAsIDYwLCA2MCwgJ3JnYigyMDAsIDIwMCwgMCknLCBmYWxzZSwgMTApO1xuICAgIGNvbnN0IGJhdHRlcnkyID0gbmV3IEJhdHRlcnkoMjcwLCA0OTAsIDcwLCA2MCwgJ3JnYigyMDAsIDIwMCwgMCknLCBmYWxzZSwgMTApO1xuICAgIGNvbnN0IGJhdHRlcnkzID0gbmV3IEJhdHRlcnkoNTQwLCA0OTAsIDYwLCA2MCwgJ3JnYigyMDAsIDIwMCwgMCknLCBmYWxzZSwgMTApO1xuICAgIFxuICAgIGlmICh0aGlzLmx2bCA9PT0gMSkge1xuICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICB0aGlzLmNpdGllcyA9IFtldXJla2EsIHNhbkZyYW5jaXNjbywgc2FuTHVpc09iaXNwbywgc2FudGFCYXJiYXJhLCBsb3NBbmdlbGFzLCBzYW5EaWVnb107XG4gICAgfSBlbHNlIGlmICh0aGlzLmNpdGllcyAhPT0gMCkge1xuICAgICAgdGhpcy5zY29yZSArPSAodGhpcy5wbGF5ZXJNaXNzaWxlQ291bnQgKiA1KTtcbiAgICAgIHRoaXMuZW5lbXlUYXJnZXRzID0gW107XG4gICAgfVxuICAgIHRoaXMuYmF0dGVyaWVzID0gW2JhdHRlcnkxLCBiYXR0ZXJ5MiwgYmF0dGVyeTNdO1xuICAgIHRoaXMuc2V0UGxheWVyTWlzc2lsZUNvdW50KCk7XG4gICAgdGhpcy5lbmVteVNob290KCk7XG4gIH1cblxuICBzZXRQbGF5ZXJNaXNzaWxlQ291bnQoKSB7XG4gICAgdGhpcy5wbGF5ZXJNaXNzaWxlQ291bnQgPSB0aGlzLmJhdHRlcmllcy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBiYXR0ZXJ5KSA9PiB7XG4gICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBiYXR0ZXJ5Lm1pc3NpbGVDb3VudDtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGdhbWVPdmVyKGN0eCwgaW5wdXQsIGJ1dHRvbikge1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwgMCwgMCknO1xuICAgIGN0eC5mb250ID0gJzQ4cHggc2VyaWYnO1xuXG4gICAgaWYgKHRoaXMuaGlnaFNjb3JlLnNjb3JlIDwgdGhpcy5zY29yZSkge1xuICAgICAgY3R4LmZpbGxUZXh0KCdISUdIIFNDT1JFIScsIDE1MCwgMzAwKTtcbiAgICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjb3JlICE9PSAwKSB7XG4gICAgICB0aGlzLmx2bCA9IDE7XG4gICAgICBjdHguZmlsbFRleHQoJ1RIRSBFTkQnLCAxOTUsIDMwMCk7XG4gICAgfVxuICB9XG5cbiAgc2V0SGlnaFNjb3JlKG5hbWUpIHtcbiAgICB0aGlzLmhpZ2hTY29yZSA9IHtcbiAgICAgIHBsYXllck5hbWU6IG5hbWUudmFsdWUsXG4gICAgICBsZXZlbDogdGhpcy5sdmwsXG4gICAgICBzY29yZTogdGhpcy5zY29yZVxuICAgIH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaHNjb3JlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5oaWdoU2NvcmUpKTtcbiAgfVxuXG4gIGN1cnJlbnRIaWdoU2NvcmUoKSB7XG4gICAgbGV0IGN1cnJlbnRIaWdoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJykpO1xuICAgIGlmIChjdXJyZW50SGlnaCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLmhpZ2hTY29yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWdoU2NvcmUgPSBjdXJyZW50SGlnaDtcbiAgICB9XG4gIH1cblxuICBkcmF3VGV4dChjdHgpIHtcbiAgICBjb25zdCBiYXR0ZXJ5Q291bnRzID0gW1xuICAgICAge2NvdW50OiAnT1VUJywgeDogMCwgeFBvczogMTB9LCBcbiAgICAgIHtjb3VudDogJ09VVCcsIHg6IDI3MCwgeFBvczogMjg1fSwgXG4gICAgICB7Y291bnQ6ICdPVVQnLCB4OiA1NDAsIHhQb3M6IDU1MH1cbiAgICBdO1xuICAgIFxuICAgIGlmICh0aGlzLmJhdHRlcmllcy5sZW5ndGggIT09IDApIHtcbiAgICAgIGJhdHRlcnlDb3VudHMuZm9yRWFjaCgoYmF0Q291bnQpID0+IHsgXG4gICAgICAgIHRoaXMuYmF0dGVyaWVzLmZvckVhY2goKGJhdHRlcnkpID0+IHsgXG4gICAgICAgICAgaWYgKGJhdHRlcnkueCA9PT0gYmF0Q291bnQueCkge1xuICAgICAgICAgICAgcmV0dXJuIGJhdENvdW50LmNvdW50ID0gYmF0dGVyeS5taXNzaWxlQ291bnQ7IFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwgMjAwLCAyMDApJztcbiAgICBjdHguZm9udCA9ICcyMHB4IHNhbnMtc2VyaWYnO1xuICAgIGJhdHRlcnlDb3VudHMuZm9yRWFjaChjb3VudCA9PiBjdHguZmlsbFRleHQoY291bnQuY291bnQsIGNvdW50LnhQb3MgKyA2LCA1NzApKTtcbiAgICB0aGlzLmRyYXdTY29yZShjdHgpO1xuICB9XG5cbiAgZHJhd1Njb3JlKGN0eCkge1xuICAgIGN0eC5mb250ID0gJzE4cHggc2Fucy1zZXJpZic7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoNSwgMzIsIDc4KSc7XG4gICAgY3R4LnJlY3QoMCwgMCwgNjAwLCA0MCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDI1NSwgMjU1KSc7XG4gICAgY3R4LmZpbGxUZXh0KGBsZXZlbDogJHt0aGlzLmx2bH1gLCAzMCwgMjgpOyAgXG4gICAgY3R4LmZpbGxUZXh0KGBzY29yZTogJHt0aGlzLnNjb3JlfWAsIDEyMCwgMjgpO1xuICAgIGN0eC5maWxsVGV4dChgaGlnaCBzY29yZTogJHt0aGlzLmhpZ2hTY29yZS5wbGF5ZXJOYW1lfSB8ICR7dGhpcy5oaWdoU2NvcmUuc2NvcmV9YCwgMzIwLCAyOCk7XG4gIH1cblxuICBnZW5lcmF0ZVRlcnJhaW4oY3R4KSB7XG4gICAgY29uc3QgdGVycmFpbiA9IG5ldyBHYW1lUGllY2UoMCwgNTIwLCA2MDAsIDgwLCAncmdiKDI1NSwgMjU1LCAwKScsIDApO1xuXG4gICAgdGVycmFpbi5kcmF3KGN0eCk7XG4gIH1cblxuICBmaW5kQmF0dGVyeShldmVudCkge1xuICAgIGNvbnN0IHtiYXR0ZXJpZXN9ID0gdGhpcztcbiAgICBsZXQgYmF0dGVyeVhwb3NpdGlvbnMgPSBiYXR0ZXJpZXMubWFwKGJhdHRlcnkgPT4gTWF0aC5hYnMoYmF0dGVyeS54IC0gZXZlbnQubGF5ZXJYKSk7XG4gICAgbGV0IGNsb3Nlc3RCYXR0ZXJ5ID0gYmF0dGVyeVhwb3NpdGlvbnMuaW5kZXhPZihNYXRoLm1pbiguLi5iYXR0ZXJ5WHBvc2l0aW9ucykpO1xuICAgIGxldCB2YWxpZEJhdHRlcnkgPSBiYXR0ZXJpZXNbY2xvc2VzdEJhdHRlcnldO1xuICAgIGxldCB4UG9zID0gdmFsaWRCYXR0ZXJ5LnggKyAzMDtcblxuICAgIHJldHVybiB7eDogeFBvcywgeTogNDkwfTtcbiAgfVxuXG4gIHNob290KGV2ZW50KSB7XG4gICAgY29uc3Qge2JhdHRlcmllcywgdGFyZ2V0cywgbWlzc2lsZXN9ID0gdGhpcztcbiAgICBjb25zdCBiYXR0ZXJ5UG9zID0gdGhpcy5maW5kQmF0dGVyeShldmVudCk7XG4gICAgY29uc3QgbW91c2VQb3MgPSB7eDogZXZlbnQubGF5ZXJYLCB5OiBldmVudC5sYXllcll9O1xuICAgIGNvbnN0IG1pc3NpbGVUYXJnZXQgPSBuZXcgVGFyZ2V0KG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIDEwLCAxMCwgJ3JnYigyMDAsIDI1MCwgMjUpJywgMCwgMCk7XG5cbiAgICBtb3VzZVBvcy55ID4gNDM4ID8gbWlzc2lsZVRhcmdldC55ID0gNDM1IDogZXZlbnQubGF5ZXJZO1xuICAgIFxuICAgIGNvbnN0IGNvdW50ZXJNaXNzaWxlID0gbmV3IFdlYXBvbihiYXR0ZXJ5UG9zLngsIDQ5MCwgNSwgNSwgJ3JnYigwLCAyMDAsIDIwMCknLCAwLCAwLCAxMiwgYmF0dGVyeVBvcywgeyB4OiBtb3VzZVBvcy54ICsgNSwgeTogbWlzc2lsZVRhcmdldC55ICsgNX0sIDEwLCB0cnVlKTtcbiAgXG4gICAgdGFyZ2V0cy5wdXNoKG1pc3NpbGVUYXJnZXQpO1xuICAgIG1pc3NpbGVzLnB1c2goY291bnRlck1pc3NpbGUpO1xuXG4gICAgYmF0dGVyaWVzLmZvckVhY2goYmF0dGVyeSA9PiB7XG4gICAgICBpZiAoYmF0dGVyeS54ID09PSBjb3VudGVyTWlzc2lsZS5wMS54IC0gMzApIHtcbiAgICAgICAgYmF0dGVyeS5taXNzaWxlQ291bnQgLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChiYXR0ZXJ5Lm1pc3NpbGVDb3VudCA9PT0gMCkge1xuICAgICAgICBiYXR0ZXJpZXMuc3BsaWNlKGJhdHRlcmllcy5pbmRleE9mKGJhdHRlcnkpLCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFBsYXllck1pc3NpbGVDb3VudCgpO1xuICB9XG5cbiAgcmFuZG9tUG9zKG1pbiwgbWF4KSB7XG4gICAgY29uc3QgbWluaW11bSA9IE1hdGguY2VpbChtaW4pO1xuICAgIGNvbnN0IG1heGltdW0gPSBNYXRoLmZsb29yKG1heCk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heGltdW0gLSBtaW5pbXVtICsgMSkpICsgbWluaW11bTtcbiAgfVxuXG4gIGVuZW15U2hvb3QoKSB7XG4gICAgY29uc3Qge2VuZW15V2VhcG9uQ291bnQsIGVuZW15TWlzc2lsZXMsIHJhbmRvbVBvc30gPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmVteVdlYXBvbkNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHBsYXllclRhcmdldHMgPSBbNjAsIDEzNSwgMjEwLCAzNjAsIDQzMCwgNTAwLCAwLCAyNzAsIDU0MF07XG4gICAgICBjb25zdCBlbmVteVBvczEgPSB7IHg6IHJhbmRvbVBvcygxMCwgNTkwKSwgeTogcmFuZG9tUG9zKC01MDAsIC0xMDApIH07XG4gICAgICBjb25zdCBlbmVteVBvczIgPSB7IHg6IHBsYXllclRhcmdldHNbIHJhbmRvbVBvcygwLCA4KSBdICsgMjUsIHk6IDUyMCB9O1xuICAgICAgY29uc3QgZW5lbXlNaXNzaWxlID0gXG4gICAgICBuZXcgV2VhcG9uKGVuZW15UG9zMS54LCBlbmVteVBvczEueSwgNSwgNSwgJ3JnYigyNTUsIDAsIDApJywgMCwgMCwgMCwgZW5lbXlQb3MxLCBlbmVteVBvczIsIDEsIHRydWUpO1xuXG4gICAgICBlbmVteU1pc3NpbGVzLnB1c2goZW5lbXlNaXNzaWxlKTtcbiAgICB9XG4gIH1cblxuICBleHBsb2RlKHdlYXBvbikge1xuICAgIGNvbnN0IGV4cGxvc2lvbiA9IFxuICAgIG5ldyBUYXJnZXQod2VhcG9uLngsIHdlYXBvbi55LCAzMCwgMzAsICdyZ2IoMjU1LCAxMDAsIDApJywgMCwgMCwgMCwgdHJ1ZSwgMjUpO1xuICAgIFxuICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKGV4cGxvc2lvbik7XG4gIH1cblxuICBkcmF3T2JqZWN0cyhjdHgpIHtcbiAgICBjb25zdCBnYW1lQXJyYXlzID0gW1xuICAgICAgdGhpcy5lbmVteU1pc3NpbGVzLFxuICAgICAgdGhpcy5leHBsb3Npb25zLFxuICAgICAgdGhpcy5iYXR0ZXJpZXMsXG4gICAgICB0aGlzLm1pc3NpbGVzLFxuICAgICAgdGhpcy50YXJnZXRzLFxuICAgICAgdGhpcy5jaXRpZXNcbiAgICBdO1xuXG4gICAgdGhpcy5nZW5lcmF0ZVRlcnJhaW4oY3R4KTtcblxuICAgIGdhbWVBcnJheXMuZm9yRWFjaChhcnJheSA9PiBhcnJheS5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBvYmouY291bnQgPT09IDAgJiYgb2JqLmlzRXhwbG9zaW9uID09PSB0cnVlIFxuICAgICAgICA/IHRoaXMuZXhwbG9zaW9ucy5zaGlmdChvYmopIFxuICAgICAgICA6IG9iai5jb3VudC0tICYmIG9iai5kcmF3KGN0eCk7IFxuICAgIH0pKTtcbiAgfVxuXG4gIGFuaW1hdGVNaXNzaWxlcyhhcnJheSwgY3R4KSB7XG4gICAgYXJyYXkuZm9yRWFjaCgobWlzc2lsZSkgPT4ge1xuICAgICAgbWlzc2lsZS5taXNzaWxlVGFpbCgpO1xuICAgICAgbWlzc2lsZS5tb3ZlKCk7XG4gICAgICBtaXNzaWxlLmRyYXcoY3R4KTtcbiAgICAgIG1pc3NpbGUudGFpbC5mb3JFYWNoKHNlZyA9PiBzZWcuZHJhdyhjdHgpKTtcbiAgICAgIHRoaXMub2JqZWN0aXZlRGV0ZWN0aW9uKGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9iamVjdGl2ZURldGVjdGlvbih3ZWFwb25zKSB7XG4gICAgd2VhcG9ucy5mb3JFYWNoKCh3ZWFwb24pID0+IHtcbiAgICAgIGNvbnN0IHBvc0RpZmZZID0gTWF0aC5hYnMod2VhcG9uLnkgLSB3ZWFwb24ucDIueSk7XG4gICAgICBsZXQgZGVhZFdlYXBvbiA9IHdlYXBvbnMuaW5kZXhPZih3ZWFwb24pO1xuXG4gICAgICBpZiAoIHBvc0RpZmZZIDwgNSApIHtcbiAgICAgICAgd2VhcG9ucy5zcGxpY2UoZGVhZFdlYXBvbiwgMSk7XG4gICAgICAgIHRoaXMudGFyZ2V0cy5zcGxpY2Uod2VhcG9ucy5maW5kSW5kZXgoaW5kZXggPT4gaW5kZXgpLCAxKTtcbiAgICAgICAgdGhpcy5leHBsb2RlKHdlYXBvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBleHBsb3Npb25EZXRlY3Rpb24odGFyZ2V0cykge1xuICAgIHRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgdGhpcy5lbmVteU1pc3NpbGVzLmZvckVhY2god2VhcG9uID0+IHtcbiAgICAgICAgbGV0IGh5cG9EaWZmID0gTWF0aC5oeXBvdCh0YXJnZXQueCAtIHdlYXBvbi54LCB0YXJnZXQueSAtIHdlYXBvbi55KTtcbiAgICAgICAgbGV0IGRlYWRXZWFwb24gPSB0aGlzLmVuZW15TWlzc2lsZXMuaW5kZXhPZih3ZWFwb24pO1xuICAgICAgICBsZXQgZGVhZFRhcmdldCA9IHRhcmdldHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHdlYXBvbi5pc0NvbGxpZGluZ1dpdGgodGFyZ2V0KSAmJiB0YXJnZXQueCA9PT0gd2VhcG9uLnAyLnggLSAyNSAmJiB3ZWFwb24ueSA+IDUxMCkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRzLnNwbGljZShkZWFkVGFyZ2V0LCAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChoeXBvRGlmZiA8IHRhcmdldC5yYWRpdXMpIHtcbiAgICAgICAgICB0aGlzLmV4cGxvZGUod2VhcG9uKTtcbiAgICAgICAgICB0aGlzLmVuZW15TWlzc2lsZXMuc3BsaWNlKGRlYWRXZWFwb24sIDEpO1xuICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMjUgKiB0aGlzLmx2bDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXRlY3RDb2xsaXNpb25zKCkge1xuICAgIGxldCBkZXRlY3RBcnJheXMgPSBbXG4gICAgICB0aGlzLmNpdGllcyxcbiAgICAgIHRoaXMuYmF0dGVyaWVzLFxuICAgICAgdGhpcy5leHBsb3Npb25zXG4gICAgXTtcblxuICAgIGRldGVjdEFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHRoaXMuZXhwbG9zaW9uRGV0ZWN0aW9uKGFycmF5KSk7XG4gIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHggPSAwLCBkeSA9IDAsIGR2ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHggPSBkeDsgXG4gICAgdGhpcy5keSA9IGR5OyBcbiAgICB0aGlzLmR2ID0gZHY7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuICEoXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoIDwgb2JqZWN0LnggfHxcbiAgICAgIHRoaXMueCA+IG9iamVjdC54ICsgb2JqZWN0LndpZHRoIHx8IFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPCBvYmplY3QueSB8fFxuICAgICAgdGhpcy55ID4gb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9ID0gdGhpcztcblxuICAgIGlmICgodGhpcy5pc01pc3NpbGUgfHwgdGhpcy5pc0V4cGxvc2lvbikgIT09IHRydWUpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBtb3ZlKCB4QW1vdW50ID0gdGhpcy5keCwgeUFtb3VudCA9IHRoaXMuZHkpIHtcbiAgICB0aGlzLnggKz0geEFtb3VudCAqIHRoaXMuZHY7XG4gICAgdGhpcy55ICs9IHlBbW91bnQgKiB0aGlzLmR2O1xuICB9XG4gIFxufTtcblxuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiwgaXNFeHBsb3Npb24gPSBmYWxzZSwgcmFkaXVzID0gMCkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2KTtcbiAgICB0aGlzLmNvdW50ID0gODA7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5pc0V4cGxvc2lvbiA9IGlzRXhwbG9zaW9uO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgY29uc3QgeyB4LCB5LCBpc0V4cGxvc2lvbiwgcmFkaXVzIH0gPSB0aGlzO1xuICAgXG4gICAgaWYgKGlzRXhwbG9zaW9uID09PSB0cnVlKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDEwMCwgMCknO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbn07IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXZWFwb24gZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiA9IDAuNSwgcDEsIHAyLCBzcGVlZCwgaXNNaXNzaWxlID0gZmFsc2UpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiA9IDAuNSk7XG4gICAgdGhpcy5kdiA9IGR2O1xuICAgIHRoaXMucDEgPSBwMTtcbiAgICB0aGlzLnAyID0gcDI7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuaXNNaXNzaWxlID0gaXNNaXNzaWxlO1xuICAgIC8vIGFuZ2xlIGluIGRlZ3JlZXNcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5hdGFuMih0aGlzLnAyLnkgLSB0aGlzLnAxLnksIHRoaXMucDIueCAtIHRoaXMucDEueCkgKiAxODAgLyBNYXRoLlBJO1xuICAgIC8vIGFuZ2xlIGluIHJhZGlhbnNcbiAgICB0aGlzLnJhZGlhbnMgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbiAgICAvL0hvdyBtYW55IG1vdmVzIHRvIG1ha2UgZWFjaCByZWRyYXdcbiAgICB0aGlzLnh1bml0cyA9IE1hdGguY29zKHRoaXMucmFkaWFucykgKiB0aGlzLnNwZWVkO1xuICAgIHRoaXMueXVuaXRzID0gTWF0aC5zaW4odGhpcy5yYWRpYW5zKSAqIHRoaXMuc3BlZWQ7XG4gICAgdGhpcy50YWlsID0gW107XG4gIH1cblxuICBtaXNzaWxlVGFpbCgpIHtcbiAgICBjb25zdCB7eCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIHRhaWx9ID0gdGhpcztcblxuICAgIGNvbnN0IHNlZ21lbnQgPSBcbiAgICBuZXcgR2FtZVBpZWNlKHggLSAzLCB5IC0gMywgd2lkdGgsIGhlaWdodCwgY29sb3IsIDAsIDAsIDApO1xuXG4gICAgdGFpbC5wdXNoKHNlZ21lbnQpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgY29uc3QgeyB4LCB5LCBjb2xvciwgaXNNaXNzaWxlIH0gPSB0aGlzO1xuXG4gICAgaWYgKGlzTWlzc2lsZSA9PT0gdHJ1ZSkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh4LCB5LCAzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgXG4gIG1vdmUoKSB7XG4gICAgc3VwZXIubW92ZSgpO1xuICAgIC8vIHRoaXMuY3VycmVudFBvcyA9IHt4Ok1hdGgucm91bmQodGhpcy54KSwgeTpNYXRoLnJvdW5kKHRoaXMueSl9O1xuICAgIGlmICh0aGlzLmlzTWlzc2lsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy54ICs9IHRoaXMueHVuaXRzO1xuICAgICAgdGhpcy55ICs9IHRoaXMueXVuaXRzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG59OyIsImNvbnN0IGhpZ2hTY29yZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hzY29yZScpO1xuY29uc3QgaGlnaHNjb3JlUGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idG4nKTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBnYW1lLmN1cnJlbnRIaWdoU2NvcmUoKSk7XG5cbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgZ2FtZS5zaG9vdChlKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gODApIHtcbiAgICBnYW1lLnRvZ2dsZVBhdXNlKCk7XG4gIH1cbn0pO1xuXG5oaWdoU2NvcmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZ2FtZS5zZXRIaWdoU2NvcmUoaGlnaHNjb3JlUGxheWVyTmFtZSk7XG4gIGhpZ2hTY29yZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5zdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBnYW1lLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgZ2FtZS5uZXdHYW1lKCk7XG4gIHN0YXJ0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gdXBkYXRlKCkge1xuICBpZiAoZ2FtZS5wYXVzZWQpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAwLCAwKSc7XG4gICAgY29udGV4dC5mb250ID0gJzQ4cHggc2VyaWYnO1xuICAgIGNvbnRleHQuZmlsbFRleHQoJ1BBVVNFRCcsIDE5NSwgMzAwKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGdhbWUuZ2FtZUxvb3AoaGlnaFNjb3JlSW5wdXQsIHN0YXJ0LCBjb250ZXh0KTtcbiAgfVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9