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
      ctx.fillText('high score: ' + this.highScore.playerName.toUpperCase() + ' | ' + this.highScore.score, 320, 28);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhdHRlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL2xpYi9XZWFwb24uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRhcmdldCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiZHgiLCJkeSIsImR2IiwiaXNFeHBsb3Npb24iLCJjb3VudCIsIm1pc3NpbGVDb3VudCIsIkdhbWVQaWVjZSIsIkJhdHRlcnkiLCJXZWFwb24iLCJtaXNzaWxlcyIsImVuZW15TWlzc2lsZXMiLCJ0YXJnZXRzIiwiZXhwbG9zaW9ucyIsImNpdGllcyIsImJhdHRlcmllcyIsImx2bCIsImVuZW15V2VhcG9uQ291bnQiLCJwbGF5ZXJNaXNzaWxlQ291bnQiLCJpc0dhbWVPdmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJwbGF5ZXJOYW1lIiwibGV2ZWwiLCJwYXVzZWQiLCJoaWdoU2NvcmVJbnB1dCIsInN0YXJ0IiwiY3R4IiwiZ2FtZU92ZXIiLCJkcmF3T2JqZWN0cyIsImFuaW1hdGVNaXNzaWxlcyIsImRldGVjdENvbGxpc2lvbnMiLCJkcmF3VGV4dCIsImxlbmd0aCIsIm5ld0dhbWUiLCJlbmVteVNob290IiwiZXVyZWthIiwic2FuRnJhbmNpc2NvIiwic2FuTHVpc09iaXNwbyIsInNhbnRhQmFyYmFyYSIsImxvc0FuZ2VsYXMiLCJzYW5EaWVnbyIsImJhdHRlcnkxIiwiYmF0dGVyeTIiLCJiYXR0ZXJ5MyIsImVuZW15VGFyZ2V0cyIsInNldFBsYXllck1pc3NpbGVDb3VudCIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiYmF0dGVyeSIsImlucHV0IiwiYnV0dG9uIiwic3R5bGUiLCJkaXNwbGF5IiwiZmlsbFN0eWxlIiwiZm9udCIsImZpbGxUZXh0IiwibmFtZSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjdXJyZW50SGlnaCIsInBhcnNlIiwiZ2V0SXRlbSIsImJhdHRlcnlDb3VudHMiLCJ4UG9zIiwiZm9yRWFjaCIsImJhdENvdW50IiwiZHJhd1Njb3JlIiwicmVjdCIsImZpbGwiLCJ0b1VwcGVyQ2FzZSIsInRlcnJhaW4iLCJkcmF3IiwiZXZlbnQiLCJiYXR0ZXJ5WHBvc2l0aW9ucyIsIm1hcCIsIk1hdGgiLCJhYnMiLCJsYXllclgiLCJjbG9zZXN0QmF0dGVyeSIsImluZGV4T2YiLCJtaW4iLCJ2YWxpZEJhdHRlcnkiLCJiYXR0ZXJ5UG9zIiwiZmluZEJhdHRlcnkiLCJtb3VzZVBvcyIsImxheWVyWSIsIm1pc3NpbGVUYXJnZXQiLCJjb3VudGVyTWlzc2lsZSIsInB1c2giLCJwMSIsInNwbGljZSIsIm1heCIsIm1pbmltdW0iLCJjZWlsIiwibWF4aW11bSIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tUG9zIiwiaSIsInBsYXllclRhcmdldHMiLCJlbmVteVBvczEiLCJlbmVteVBvczIiLCJlbmVteU1pc3NpbGUiLCJ3ZWFwb24iLCJleHBsb3Npb24iLCJnYW1lQXJyYXlzIiwiZ2VuZXJhdGVUZXJyYWluIiwiYXJyYXkiLCJvYmoiLCJzaGlmdCIsIm1pc3NpbGUiLCJtaXNzaWxlVGFpbCIsIm1vdmUiLCJ0YWlsIiwic2VnIiwib2JqZWN0aXZlRGV0ZWN0aW9uIiwid2VhcG9ucyIsInBvc0RpZmZZIiwicDIiLCJkZWFkV2VhcG9uIiwiZmluZEluZGV4IiwiaW5kZXgiLCJleHBsb2RlIiwiaHlwb0RpZmYiLCJoeXBvdCIsInRhcmdldCIsImRlYWRUYXJnZXQiLCJpc0NvbGxpZGluZ1dpdGgiLCJyYWRpdXMiLCJkZXRlY3RBcnJheXMiLCJleHBsb3Npb25EZXRlY3Rpb24iLCJvYmplY3QiLCJpc01pc3NpbGUiLCJiZWdpblBhdGgiLCJmaWxsUmVjdCIsInhBbW91bnQiLCJ5QW1vdW50IiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJzcGVlZCIsImFuZ2xlIiwiYXRhbjIiLCJyYWRpYW5zIiwieHVuaXRzIiwiY29zIiwieXVuaXRzIiwic2luIiwic2VnbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhpZ2hzY29yZVBsYXllck5hbWUiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIkdhbWUiLCJnYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnRIaWdoU2NvcmUiLCJlIiwic2hvb3QiLCJrZXlDb2RlIiwidG9nZ2xlUGF1c2UiLCJwcmV2ZW50RGVmYXVsdCIsInNldEhpZ2hTY29yZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsImNsZWFyUmVjdCIsImdhbWVMb29wIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFH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QixFQUFnQyxHQUFoQztBQUNELEdBSkQsTUFJTztBQUNMcUcsWUFBUWUsU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QmhCLE9BQU85SixLQUEvQixFQUFzQzhKLE9BQU83SixNQUE3QztBQUNBaUssU0FBS2EsUUFBTCxDQUFjcEosY0FBZCxFQUE4QkMsS0FBOUIsRUFBcUNtSSxPQUFyQztBQUNEO0FBQ0RhLHdCQUFzQkMsTUFBdEI7QUFDRCxDQVZELEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IFRhcmdldCA9IHJlcXVpcmUoJy4vVGFyZ2V0LmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQmF0dGVyeSBleHRlbmRzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2LCBpc0V4cGxvc2lvbiA9IGZhbHNlKSB7XG4gICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4LCBkeSwgZHYsIGlzRXhwbG9zaW9uID0gZmFsc2UpO1xuICAgIHRoaXMuY291bnQgPSBudWxsO1xuICAgIHRoaXMuaXNFeHBsb3Npb24gPSBpc0V4cGxvc2lvbjtcbiAgICB0aGlzLm1pc3NpbGVDb3VudCA9IDEwO1xuICB9XG59OyIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlLmpzJyk7XG5jb25zdCBCYXR0ZXJ5ID0gcmVxdWlyZSgnLi9CYXR0ZXJ5LmpzJyk7XG5jb25zdCBUYXJnZXQgPSByZXF1aXJlKCcuL1RhcmdldC5qcycpO1xuY29uc3QgV2VhcG9uID0gcmVxdWlyZSgnLi9XZWFwb24uanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5taXNzaWxlcyA9IFtdO1xuICAgIHRoaXMuZW5lbXlNaXNzaWxlcyA9IFtdO1xuICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xuICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xuICAgIHRoaXMuY2l0aWVzID0gW107XG4gICAgdGhpcy5iYXR0ZXJpZXMgPSBbXTtcbiAgICB0aGlzLmx2bCA9IDE7XG4gICAgdGhpcy5lbmVteVdlYXBvbkNvdW50ID0gKHRoaXMubHZsICogNSk7XG4gICAgdGhpcy5wbGF5ZXJNaXNzaWxlQ291bnQ7XG4gICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSB7cGxheWVyTmFtZTogJ1RDSycsIGxldmVsOiAxLCBzY29yZTogMH07XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdhbWVMb29wKGhpZ2hTY29yZUlucHV0LCBzdGFydCwgY3R4KSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgdGhpcy5nYW1lT3ZlcihjdHgsIGhpZ2hTY29yZUlucHV0LCBzdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd09iamVjdHMoY3R4KTtcbiAgICAgIHRoaXMuYW5pbWF0ZU1pc3NpbGVzKHRoaXMubWlzc2lsZXMsIGN0eCk7XG4gICAgICB0aGlzLmFuaW1hdGVNaXNzaWxlcyh0aGlzLmVuZW15TWlzc2lsZXMsIGN0eCk7XG4gICAgICB0aGlzLmRldGVjdENvbGxpc2lvbnMoKTtcbiAgICAgIHRoaXMuZHJhd1RleHQoY3R4KTtcbiAgICB9XG4gIFxuICAgIGlmICh0aGlzLmNpdGllcy5sZW5ndGggPT09IDAgJiYgdGhpcy5lbmVteU1pc3NpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2l0aWVzLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmVuZW15TWlzc2lsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmx2bCsrO1xuICAgICAgdGhpcy5uZXdHYW1lKCk7XG4gICAgICB0aGlzLmVuZW15U2hvb3QoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVQYXVzZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgfVxuIFxuICBuZXdHYW1lKCkge1xuICAgIGNvbnN0IGV1cmVrYSA9IG5ldyBUYXJnZXQoNjAsIDUwNSwgNDAsIDMwLCAncmdiKDAsIDIwMCwgMjAwKScsIGZhbHNlKTtcbiAgICBjb25zdCBzYW5GcmFuY2lzY28gPSBuZXcgVGFyZ2V0KDEzNSwgNTEwLCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IHNhbkx1aXNPYmlzcG8gPSBuZXcgVGFyZ2V0KDIxMCwgNTE1LCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IHNhbnRhQmFyYmFyYSA9IG5ldyBUYXJnZXQoMzYwLCA1MTAsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3QgbG9zQW5nZWxhcyA9IG5ldyBUYXJnZXQoNDMwLCA1MDAsIDQwLCAzMCwgJ3JnYigwLCAyMDAsIDIwMCknLCBmYWxzZSk7XG4gICAgY29uc3Qgc2FuRGllZ28gPSBuZXcgVGFyZ2V0KDUwMCwgNTE1LCA0MCwgMzAsICdyZ2IoMCwgMjAwLCAyMDApJywgZmFsc2UpO1xuICAgIGNvbnN0IGJhdHRlcnkxID0gbmV3IEJhdHRlcnkoMCwgNDkwLCA2MCwgNjAsICdyZ2IoMjAwLCAyMDAsIDApJywgZmFsc2UsIDEwKTtcbiAgICBjb25zdCBiYXR0ZXJ5MiA9IG5ldyBCYXR0ZXJ5KDI3MCwgNDkwLCA3MCwgNjAsICdyZ2IoMjAwLCAyMDAsIDApJywgZmFsc2UsIDEwKTtcbiAgICBjb25zdCBiYXR0ZXJ5MyA9IG5ldyBCYXR0ZXJ5KDU0MCwgNDkwLCA2MCwgNjAsICdyZ2IoMjAwLCAyMDAsIDApJywgZmFsc2UsIDEwKTtcbiAgICBcbiAgICBpZiAodGhpcy5sdmwgPT09IDEpIHtcbiAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgdGhpcy5jaXRpZXMgPSBbZXVyZWthLCBzYW5GcmFuY2lzY28sIHNhbkx1aXNPYmlzcG8sIHNhbnRhQmFyYmFyYSwgbG9zQW5nZWxhcywgc2FuRGllZ29dO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jaXRpZXMgIT09IDApIHtcbiAgICAgIHRoaXMuc2NvcmUgKz0gKHRoaXMucGxheWVyTWlzc2lsZUNvdW50ICogNSk7XG4gICAgICB0aGlzLmVuZW15VGFyZ2V0cyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmJhdHRlcmllcyA9IFtiYXR0ZXJ5MSwgYmF0dGVyeTIsIGJhdHRlcnkzXTtcbiAgICB0aGlzLnNldFBsYXllck1pc3NpbGVDb3VudCgpO1xuICAgIHRoaXMuZW5lbXlTaG9vdCgpO1xuICB9XG5cbiAgc2V0UGxheWVyTWlzc2lsZUNvdW50KCkge1xuICAgIHRoaXMucGxheWVyTWlzc2lsZUNvdW50ID0gdGhpcy5iYXR0ZXJpZXMucmVkdWNlKChhY2N1bXVsYXRvciwgYmF0dGVyeSkgPT4ge1xuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgYmF0dGVyeS5taXNzaWxlQ291bnQ7XG4gICAgfSwgMCk7XG4gIH1cblxuICBnYW1lT3ZlcihjdHgsIGlucHV0LCBidXR0b24pIHtcbiAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDAsIDApJztcbiAgICBjdHguZm9udCA9ICc0OHB4IHNlcmlmJztcblxuICAgIGlmICh0aGlzLmhpZ2hTY29yZS5zY29yZSA8IHRoaXMuc2NvcmUpIHtcbiAgICAgIGN0eC5maWxsVGV4dCgnSElHSCBTQ09SRSEnLCAxNTAsIDMwMCk7XG4gICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY29yZSAhPT0gMCkge1xuICAgICAgdGhpcy5sdmwgPSAxO1xuICAgICAgY3R4LmZpbGxUZXh0KCdUSEUgRU5EJywgMTk1LCAzMDApO1xuICAgIH1cbiAgfVxuXG4gIHNldEhpZ2hTY29yZShuYW1lKSB7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSB7XG4gICAgICBwbGF5ZXJOYW1lOiBuYW1lLnZhbHVlLFxuICAgICAgbGV2ZWw6IHRoaXMubHZsLFxuICAgICAgc2NvcmU6IHRoaXMuc2NvcmVcbiAgICB9O1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hzY29yZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuaGlnaFNjb3JlKSk7XG4gIH1cblxuICBjdXJyZW50SGlnaFNjb3JlKCkge1xuICAgIGxldCBjdXJyZW50SGlnaCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpKTtcbiAgICBpZiAoY3VycmVudEhpZ2ggPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGlnaFNjb3JlID0gdGhpcy5oaWdoU2NvcmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlnaFNjb3JlID0gY3VycmVudEhpZ2g7XG4gICAgfVxuICB9XG5cbiAgZHJhd1RleHQoY3R4KSB7XG4gICAgY29uc3QgYmF0dGVyeUNvdW50cyA9IFtcbiAgICAgIHtjb3VudDogJ09VVCcsIHg6IDAsIHhQb3M6IDEwfSwgXG4gICAgICB7Y291bnQ6ICdPVVQnLCB4OiAyNzAsIHhQb3M6IDI4NX0sIFxuICAgICAge2NvdW50OiAnT1VUJywgeDogNTQwLCB4UG9zOiA1NTB9XG4gICAgXTtcbiAgICBcbiAgICBpZiAodGhpcy5iYXR0ZXJpZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBiYXR0ZXJ5Q291bnRzLmZvckVhY2goKGJhdENvdW50KSA9PiB7IFxuICAgICAgICB0aGlzLmJhdHRlcmllcy5mb3JFYWNoKChiYXR0ZXJ5KSA9PiB7IFxuICAgICAgICAgIGlmIChiYXR0ZXJ5LnggPT09IGJhdENvdW50LngpIHtcbiAgICAgICAgICAgIHJldHVybiBiYXRDb3VudC5jb3VudCA9IGJhdHRlcnkubWlzc2lsZUNvdW50OyBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDAsIDIwMCwgMjAwKSc7XG4gICAgY3R4LmZvbnQgPSAnMjBweCBzYW5zLXNlcmlmJztcbiAgICBiYXR0ZXJ5Q291bnRzLmZvckVhY2goY291bnQgPT4gY3R4LmZpbGxUZXh0KGNvdW50LmNvdW50LCBjb3VudC54UG9zICsgNiwgNTcwKSk7XG4gICAgdGhpcy5kcmF3U2NvcmUoY3R4KTtcbiAgfVxuXG4gIGRyYXdTY29yZShjdHgpIHtcbiAgICBjdHguZm9udCA9ICcxOHB4IHNhbnMtc2VyaWYnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDUsIDMyLCA3OCknO1xuICAgIGN0eC5yZWN0KDAsIDAsIDYwMCwgNDApO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAyNTUsIDI1NSknO1xuICAgIGN0eC5maWxsVGV4dChgbGV2ZWw6ICR7dGhpcy5sdmx9YCwgMzAsIDI4KTsgIFxuICAgIGN0eC5maWxsVGV4dChgc2NvcmU6ICR7dGhpcy5zY29yZX1gLCAxMjAsIDI4KTtcbiAgICBjdHguZmlsbFRleHQoYGhpZ2ggc2NvcmU6ICR7dGhpcy5oaWdoU2NvcmUucGxheWVyTmFtZS50b1VwcGVyQ2FzZSgpfSB8ICR7dGhpcy5oaWdoU2NvcmUuc2NvcmV9YCwgMzIwLCAyOCk7XG4gIH1cblxuICBnZW5lcmF0ZVRlcnJhaW4oY3R4KSB7XG4gICAgY29uc3QgdGVycmFpbiA9IG5ldyBHYW1lUGllY2UoMCwgNTIwLCA2MDAsIDgwLCAncmdiKDI1NSwgMjU1LCAwKScsIDApO1xuXG4gICAgdGVycmFpbi5kcmF3KGN0eCk7XG4gIH1cblxuICBmaW5kQmF0dGVyeShldmVudCkge1xuICAgIGNvbnN0IHtiYXR0ZXJpZXN9ID0gdGhpcztcbiAgICBsZXQgYmF0dGVyeVhwb3NpdGlvbnMgPSBiYXR0ZXJpZXMubWFwKGJhdHRlcnkgPT4gTWF0aC5hYnMoYmF0dGVyeS54IC0gZXZlbnQubGF5ZXJYKSk7XG4gICAgbGV0IGNsb3Nlc3RCYXR0ZXJ5ID0gYmF0dGVyeVhwb3NpdGlvbnMuaW5kZXhPZihNYXRoLm1pbiguLi5iYXR0ZXJ5WHBvc2l0aW9ucykpO1xuICAgIGxldCB2YWxpZEJhdHRlcnkgPSBiYXR0ZXJpZXNbY2xvc2VzdEJhdHRlcnldO1xuICAgIGxldCB4UG9zID0gdmFsaWRCYXR0ZXJ5LnggKyAzMDtcblxuICAgIHJldHVybiB7eDogeFBvcywgeTogNDkwfTtcbiAgfVxuXG4gIHNob290KGV2ZW50KSB7XG4gICAgY29uc3Qge2JhdHRlcmllcywgdGFyZ2V0cywgbWlzc2lsZXN9ID0gdGhpcztcbiAgICBjb25zdCBiYXR0ZXJ5UG9zID0gdGhpcy5maW5kQmF0dGVyeShldmVudCk7XG4gICAgY29uc3QgbW91c2VQb3MgPSB7eDogZXZlbnQubGF5ZXJYLCB5OiBldmVudC5sYXllcll9O1xuICAgIGNvbnN0IG1pc3NpbGVUYXJnZXQgPSBuZXcgVGFyZ2V0KG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIDEwLCAxMCwgJ3JnYigyMDAsIDI1MCwgMjUpJywgMCwgMCk7XG5cbiAgICBtb3VzZVBvcy55ID4gNDM4ID8gbWlzc2lsZVRhcmdldC55ID0gNDM1IDogZXZlbnQubGF5ZXJZO1xuICAgIFxuICAgIGNvbnN0IGNvdW50ZXJNaXNzaWxlID0gbmV3IFdlYXBvbihiYXR0ZXJ5UG9zLngsIDQ5MCwgNSwgNSwgJ3JnYigwLCAyMDAsIDIwMCknLCAwLCAwLCAxMiwgYmF0dGVyeVBvcywgeyB4OiBtb3VzZVBvcy54ICsgNSwgeTogbWlzc2lsZVRhcmdldC55ICsgNX0sIDEwLCB0cnVlKTtcbiAgXG4gICAgdGFyZ2V0cy5wdXNoKG1pc3NpbGVUYXJnZXQpO1xuICAgIG1pc3NpbGVzLnB1c2goY291bnRlck1pc3NpbGUpO1xuXG4gICAgYmF0dGVyaWVzLmZvckVhY2goYmF0dGVyeSA9PiB7XG4gICAgICBpZiAoYmF0dGVyeS54ID09PSBjb3VudGVyTWlzc2lsZS5wMS54IC0gMzApIHtcbiAgICAgICAgYmF0dGVyeS5taXNzaWxlQ291bnQgLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChiYXR0ZXJ5Lm1pc3NpbGVDb3VudCA9PT0gMCkge1xuICAgICAgICBiYXR0ZXJpZXMuc3BsaWNlKGJhdHRlcmllcy5pbmRleE9mKGJhdHRlcnkpLCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFBsYXllck1pc3NpbGVDb3VudCgpO1xuICB9XG5cbiAgcmFuZG9tUG9zKG1pbiwgbWF4KSB7XG4gICAgY29uc3QgbWluaW11bSA9IE1hdGguY2VpbChtaW4pO1xuICAgIGNvbnN0IG1heGltdW0gPSBNYXRoLmZsb29yKG1heCk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heGltdW0gLSBtaW5pbXVtICsgMSkpICsgbWluaW11bTtcbiAgfVxuXG4gIGVuZW15U2hvb3QoKSB7XG4gICAgY29uc3Qge2VuZW15V2VhcG9uQ291bnQsIGVuZW15TWlzc2lsZXMsIHJhbmRvbVBvc30gPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmVteVdlYXBvbkNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHBsYXllclRhcmdldHMgPSBbNjAsIDEzNSwgMjEwLCAzNjAsIDQzMCwgNTAwLCAwLCAyNzAsIDU0MF07XG4gICAgICBjb25zdCBlbmVteVBvczEgPSB7IHg6IHJhbmRvbVBvcygxMCwgNTkwKSwgeTogcmFuZG9tUG9zKC01MDAsIC0xMDApIH07XG4gICAgICBjb25zdCBlbmVteVBvczIgPSB7IHg6IHBsYXllclRhcmdldHNbIHJhbmRvbVBvcygwLCA4KSBdICsgMjUsIHk6IDUyMCB9O1xuICAgICAgY29uc3QgZW5lbXlNaXNzaWxlID0gXG4gICAgICBuZXcgV2VhcG9uKGVuZW15UG9zMS54LCBlbmVteVBvczEueSwgNSwgNSwgJ3JnYigyNTUsIDAsIDApJywgMCwgMCwgMCwgZW5lbXlQb3MxLCBlbmVteVBvczIsIDEsIHRydWUpO1xuXG4gICAgICBlbmVteU1pc3NpbGVzLnB1c2goZW5lbXlNaXNzaWxlKTtcbiAgICB9XG4gIH1cblxuICBleHBsb2RlKHdlYXBvbikge1xuICAgIGNvbnN0IGV4cGxvc2lvbiA9IFxuICAgIG5ldyBUYXJnZXQod2VhcG9uLngsIHdlYXBvbi55LCAzMCwgMzAsICdyZ2IoMjU1LCAxMDAsIDApJywgMCwgMCwgMCwgdHJ1ZSwgMjUpO1xuICAgIFxuICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKGV4cGxvc2lvbik7XG4gIH1cblxuICBkcmF3T2JqZWN0cyhjdHgpIHtcbiAgICBjb25zdCBnYW1lQXJyYXlzID0gW1xuICAgICAgdGhpcy5lbmVteU1pc3NpbGVzLFxuICAgICAgdGhpcy5leHBsb3Npb25zLFxuICAgICAgdGhpcy5iYXR0ZXJpZXMsXG4gICAgICB0aGlzLm1pc3NpbGVzLFxuICAgICAgdGhpcy50YXJnZXRzLFxuICAgICAgdGhpcy5jaXRpZXNcbiAgICBdO1xuXG4gICAgdGhpcy5nZW5lcmF0ZVRlcnJhaW4oY3R4KTtcblxuICAgIGdhbWVBcnJheXMuZm9yRWFjaChhcnJheSA9PiBhcnJheS5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBvYmouY291bnQgPT09IDAgJiYgb2JqLmlzRXhwbG9zaW9uID09PSB0cnVlIFxuICAgICAgICA/IHRoaXMuZXhwbG9zaW9ucy5zaGlmdChvYmopIFxuICAgICAgICA6IG9iai5jb3VudC0tICYmIG9iai5kcmF3KGN0eCk7IFxuICAgIH0pKTtcbiAgfVxuXG4gIGFuaW1hdGVNaXNzaWxlcyhhcnJheSwgY3R4KSB7XG4gICAgYXJyYXkuZm9yRWFjaCgobWlzc2lsZSkgPT4ge1xuICAgICAgbWlzc2lsZS5taXNzaWxlVGFpbCgpO1xuICAgICAgbWlzc2lsZS5tb3ZlKCk7XG4gICAgICBtaXNzaWxlLmRyYXcoY3R4KTtcbiAgICAgIG1pc3NpbGUudGFpbC5mb3JFYWNoKHNlZyA9PiBzZWcuZHJhdyhjdHgpKTtcbiAgICAgIHRoaXMub2JqZWN0aXZlRGV0ZWN0aW9uKGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9iamVjdGl2ZURldGVjdGlvbih3ZWFwb25zKSB7XG4gICAgd2VhcG9ucy5mb3JFYWNoKCh3ZWFwb24pID0+IHtcbiAgICAgIGNvbnN0IHBvc0RpZmZZID0gTWF0aC5hYnMod2VhcG9uLnkgLSB3ZWFwb24ucDIueSk7XG4gICAgICBsZXQgZGVhZFdlYXBvbiA9IHdlYXBvbnMuaW5kZXhPZih3ZWFwb24pO1xuXG4gICAgICBpZiAoIHBvc0RpZmZZIDwgNSApIHtcbiAgICAgICAgd2VhcG9ucy5zcGxpY2UoZGVhZFdlYXBvbiwgMSk7XG4gICAgICAgIHRoaXMudGFyZ2V0cy5zcGxpY2Uod2VhcG9ucy5maW5kSW5kZXgoaW5kZXggPT4gaW5kZXgpLCAxKTtcbiAgICAgICAgdGhpcy5leHBsb2RlKHdlYXBvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBleHBsb3Npb25EZXRlY3Rpb24odGFyZ2V0cykge1xuICAgIHRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgdGhpcy5lbmVteU1pc3NpbGVzLmZvckVhY2god2VhcG9uID0+IHtcbiAgICAgICAgbGV0IGh5cG9EaWZmID0gTWF0aC5oeXBvdCh0YXJnZXQueCAtIHdlYXBvbi54LCB0YXJnZXQueSAtIHdlYXBvbi55KTtcbiAgICAgICAgbGV0IGRlYWRXZWFwb24gPSB0aGlzLmVuZW15TWlzc2lsZXMuaW5kZXhPZih3ZWFwb24pO1xuICAgICAgICBsZXQgZGVhZFRhcmdldCA9IHRhcmdldHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHdlYXBvbi5pc0NvbGxpZGluZ1dpdGgodGFyZ2V0KSAmJiB0YXJnZXQueCA9PT0gd2VhcG9uLnAyLnggLSAyNSAmJiB3ZWFwb24ueSA+IDUxMCkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRzLnNwbGljZShkZWFkVGFyZ2V0LCAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChoeXBvRGlmZiA8IHRhcmdldC5yYWRpdXMpIHtcbiAgICAgICAgICB0aGlzLmV4cGxvZGUod2VhcG9uKTtcbiAgICAgICAgICB0aGlzLmVuZW15TWlzc2lsZXMuc3BsaWNlKGRlYWRXZWFwb24sIDEpO1xuICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMjUgKiB0aGlzLmx2bDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXRlY3RDb2xsaXNpb25zKCkge1xuICAgIGxldCBkZXRlY3RBcnJheXMgPSBbXG4gICAgICB0aGlzLmNpdGllcyxcbiAgICAgIHRoaXMuYmF0dGVyaWVzLFxuICAgICAgdGhpcy5leHBsb3Npb25zXG4gICAgXTtcblxuICAgIGRldGVjdEFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHRoaXMuZXhwbG9zaW9uRGV0ZWN0aW9uKGFycmF5KSk7XG4gIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHggPSAwLCBkeSA9IDAsIGR2ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHggPSBkeDsgXG4gICAgdGhpcy5keSA9IGR5OyBcbiAgICB0aGlzLmR2ID0gZHY7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuICEoXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoIDwgb2JqZWN0LnggfHxcbiAgICAgIHRoaXMueCA+IG9iamVjdC54ICsgb2JqZWN0LndpZHRoIHx8IFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPCBvYmplY3QueSB8fFxuICAgICAgdGhpcy55ID4gb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9ID0gdGhpcztcblxuICAgIGlmICgodGhpcy5pc01pc3NpbGUgfHwgdGhpcy5pc0V4cGxvc2lvbikgIT09IHRydWUpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBtb3ZlKCB4QW1vdW50ID0gdGhpcy5keCwgeUFtb3VudCA9IHRoaXMuZHkpIHtcbiAgICB0aGlzLnggKz0geEFtb3VudCAqIHRoaXMuZHY7XG4gICAgdGhpcy55ICs9IHlBbW91bnQgKiB0aGlzLmR2O1xuICB9XG4gIFxufTtcblxuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiwgaXNFeHBsb3Npb24gPSBmYWxzZSwgcmFkaXVzID0gMCkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBkeCwgZHksIGR2KTtcbiAgICB0aGlzLmNvdW50ID0gODA7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5pc0V4cGxvc2lvbiA9IGlzRXhwbG9zaW9uO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgY29uc3QgeyB4LCB5LCBpc0V4cGxvc2lvbiwgcmFkaXVzIH0gPSB0aGlzO1xuICAgXG4gICAgaWYgKGlzRXhwbG9zaW9uID09PSB0cnVlKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDEwMCwgMCknO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbn07IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXZWFwb24gZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiA9IDAuNSwgcDEsIHAyLCBzcGVlZCwgaXNNaXNzaWxlID0gZmFsc2UpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgZHgsIGR5LCBkdiA9IDAuNSk7XG4gICAgdGhpcy5kdiA9IGR2O1xuICAgIHRoaXMucDEgPSBwMTtcbiAgICB0aGlzLnAyID0gcDI7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuaXNNaXNzaWxlID0gaXNNaXNzaWxlO1xuICAgIC8vIGFuZ2xlIGluIGRlZ3JlZXNcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5hdGFuMih0aGlzLnAyLnkgLSB0aGlzLnAxLnksIHRoaXMucDIueCAtIHRoaXMucDEueCkgKiAxODAgLyBNYXRoLlBJO1xuICAgIC8vIGFuZ2xlIGluIHJhZGlhbnNcbiAgICB0aGlzLnJhZGlhbnMgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbiAgICAvL0hvdyBtYW55IG1vdmVzIHRvIG1ha2UgZWFjaCByZWRyYXdcbiAgICB0aGlzLnh1bml0cyA9IE1hdGguY29zKHRoaXMucmFkaWFucykgKiB0aGlzLnNwZWVkO1xuICAgIHRoaXMueXVuaXRzID0gTWF0aC5zaW4odGhpcy5yYWRpYW5zKSAqIHRoaXMuc3BlZWQ7XG4gICAgdGhpcy50YWlsID0gW107XG4gIH1cblxuICBtaXNzaWxlVGFpbCgpIHtcbiAgICBjb25zdCB7eCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIHRhaWx9ID0gdGhpcztcblxuICAgIGNvbnN0IHNlZ21lbnQgPSBcbiAgICBuZXcgR2FtZVBpZWNlKHggLSAzLCB5IC0gMywgd2lkdGgsIGhlaWdodCwgY29sb3IsIDAsIDAsIDApO1xuXG4gICAgdGFpbC5wdXNoKHNlZ21lbnQpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgY29uc3QgeyB4LCB5LCBjb2xvciwgaXNNaXNzaWxlIH0gPSB0aGlzO1xuXG4gICAgaWYgKGlzTWlzc2lsZSA9PT0gdHJ1ZSkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh4LCB5LCAzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgXG4gIG1vdmUoKSB7XG4gICAgc3VwZXIubW92ZSgpO1xuICAgIC8vIHRoaXMuY3VycmVudFBvcyA9IHt4Ok1hdGgucm91bmQodGhpcy54KSwgeTpNYXRoLnJvdW5kKHRoaXMueSl9O1xuICAgIGlmICh0aGlzLmlzTWlzc2lsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy54ICs9IHRoaXMueHVuaXRzO1xuICAgICAgdGhpcy55ICs9IHRoaXMueXVuaXRzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG59OyIsImNvbnN0IGhpZ2hTY29yZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hzY29yZScpO1xuY29uc3QgaGlnaHNjb3JlUGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idG4nKTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBnYW1lLmN1cnJlbnRIaWdoU2NvcmUoKSk7XG5cbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgZ2FtZS5zaG9vdChlKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gODApIHtcbiAgICBnYW1lLnRvZ2dsZVBhdXNlKCk7XG4gIH1cbn0pO1xuXG5oaWdoU2NvcmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZ2FtZS5zZXRIaWdoU2NvcmUoaGlnaHNjb3JlUGxheWVyTmFtZSk7XG4gIGhpZ2hTY29yZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5zdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBnYW1lLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgZ2FtZS5uZXdHYW1lKCk7XG4gIHN0YXJ0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gdXBkYXRlKCkge1xuICBpZiAoZ2FtZS5wYXVzZWQpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAwLCAwKSc7XG4gICAgY29udGV4dC5mb250ID0gJzQ4cHggc2VyaWYnO1xuICAgIGNvbnRleHQuZmlsbFRleHQoJ1BBVVNFRCcsIDE5NSwgMzAwKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGdhbWUuZ2FtZUxvb3AoaGlnaFNjb3JlSW5wdXQsIHN0YXJ0LCBjb250ZXh0KTtcbiAgfVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9