var express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    cors = require('cors'),
    Sequelize = require('sequelize'),
    _ = require('lodash');


sequelize = new Sequelize('sqlite://' + path.join(__dirname, 'oni.db'), {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'oni.db')
});

Ingredient = sequelize.define('ingredients', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL
  },
  supplier: {
    type: Sequelize.STRING
  }
});

Category = sequelize.define('categories', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  }
});

Recipe = sequelize.define('recipes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  category_id: {
    type: Sequelize.INTEGER
  }
});

SubRecipe = sequelize.define('subrecipes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  recipe_id: {
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  }
});

IngredientItem = sequelize.define('ingredientitems', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  subrecipe_id: {
    type: Sequelize.INTEGER
  },
  ingredient_id: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.DECIMAL
  },
  description: {
    type: Sequelize.STRING
  }
});

sequelize.sync().then(() => {
  // Ingredient.create({
  //   name: "Milk",
  //   price: 23.25,
  //   supplier: "Ferma"
  // });

  // Ingredient.create({
  //   name: "Sugar",
  //   price: 18.50,
  //   supplier: "Megamarket"
  // });

  // Ingredient.create({
  //   name: "Honey",
  //   price: 75.00,
  //   supplier: "Bakota"
  // });

  // Category.create({
  //   name: "Cakes"
  // });

  // Category.create({
  //   name: "Macarons"
  // });

  // Recipe.create({
  //   name: "Napoleon",
  //   category_id: 1
  // });

  // SubRecipe.create({
  //   name: "First layer",
  //   recipe_id: 1
  // });

  // SubRecipe.create({
  //   name: "Second layer",
  //   recipe_id: 1
  // });

  // IngredientItem.create({
  //   subrecipe_id: 1,
  //   ingredient_id: 1,
  //   quantity: 110,
  //   description: "test description 1"
  // });

  // IngredientItem.create({
  //   subrecipe_id: 1,
  //   ingredient_id: 2,
  //   quantity: 5.5,
  //   description: "test description 2"
  // });

  // IngredientItem.create({
  //   subrecipe_id: 2,
  //   ingredient_id: 3,
  //   quantity: 0.5,
  //   description: "test description 3"
  // });

}).catch((e) => {
  console.log("ERROR SYNCING WITH DB", e);
});

var app = module.exports = express();
app.set('port', process.env.PORT || 9020);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

// INGREDIENT API

app.route('/api/ingredients')
  .get((req, res) => {
    Ingredient.findAll().then((ingredients) => {
      res.json(ingredients);
    })
  })
  .post((req, res) => {
    req.body.forEach((element) => {
      var ingredient = Ingredient.build(_.pick(element, ['id', 'name', 'price', 'supplier']));
      ingredient.save().then((ingredient) => {
        res.json(ingredient);
      });
    });
  });

app.route('/api/ingredients/:ingredient_id')
  .get((req, res) => {
    Ingredient.findById(req.params.ingredient_id).then((ingredient) => {
       res.json(ingredient);
    });
  })
  .put((req, res) => {
    Ingredient.findById(req.params.ingredient_id).then((ingredient) => {
      ingredient.update(_.pick(req.body, ['name', 'price', 'supplier'])).then((ingredient) => {
         res.json(ingredient);
      });
    });
  })
  .delete((req, res) => {
    Ingredient.findById(req.params.ingredient_id).then(ingredient => {
      ingredient.destroy().then(ingredient => {
         res.json(ingredient);
      });
    });
  });

// CATEGORY API

app.route('/api/categories')
  .get(function(req, res) {
    Category.findAll().then(function(categories) {
      res.json(categories);
    })
  })
  .post(function(req, res) {
    var category = Category.build(_.pick(req.body, ['name']));
    category.save().then(function(category){
      res.json(category);
    });
  });

app.route('/api/categories/:category_id')
  .get(function(req, res) {
    Category.findById(req.params.category_id).then(function(category) {
      res.json(category);
    });
  })
  .put(function(req, res) {
    Category.findById(req.params.category_id).then(function(category) {
      category.update(_.pick(req.body, ['name'])).then(function(category) {
        res.json(category);
      });
    });
  })
  .delete(function(req, res) {
    Category.findById(req.params.category_id).then(function(category) {
      category.destroy().then(function(category) {
        res.json(category);
      });
    });
  });

// RECIPE API

app.route('/api/recipes')
  .get(function(req, res) {
    Recipe.findAll().then(function(recipes) {
      res.json(recipes);
    })
  })
  .post(function(req, res) {
    var recipe = Recipe.build(_.pick(req.body, ['category_id', 'name']));
    recipe.save().then(function(recipe){
      res.json(recipe);
    });
  });

app.route('/api/recipes/:recipe_id')
  .get(function(req, res) {
    Recipe.findById(req.params.recipe_id).then(function(recipe) {
      res.json(recipe);
    });
  })
  .put(function(req, res) {
    Recipe.findById(req.params.recipe_id).then(function(recipe) {
      recipe.update(_.pick(req.body, ['category_id', 'name'])).then(function(recipe) {
        res.json(recipe);
      });
    });
  })
  .delete(function(req, res) {
    Recipe.findById(req.params.recipe_id).then(function(recipe) {
      recipe.destroy().then(function(recipe) {
        res.json(recipe);
      });
    });
  });

// SUBRECIPE API

app.route('/api/subrecipes')
  .get(function(req, res) {
    SubRecipe.findAll().then(function(subrecipes) {
      res.json(subrecipes);
    })
  })
  .post(function(req, res) {
    var subrecipe = SubRecipe.build(_.pick(req.body, ['recipe_id', 'name']));
    subrecipe.save().then(function(subrecipe){
      res.json(subrecipe);
    });
  });

app.route('/api/subrecipes/:subrecipe_id')
  .get(function(req, res) {
    SubRecipe.findById(req.params.subrecipe_id).then(function(subrecipe) {
      res.json(subrecipe);
    });
  })
  .put(function(req, res) {
    SubRecipe.findById(req.params.subrecipe_id).then(function(subrecipe) {
      subrecipe.update(_.pick(req.body, ['recipe_id', 'name'])).then(function(subrecipe) {
        res.json(subrecipe);
      });
    });
  })
  .delete(function(req, res) {
    SubRecipe.findById(req.params.subrecipe_id).then(function(subrecipe) {
      subrecipe.destroy().then(function(subrecipe) {
        res.json(subrecipe);
      });
    });
  });

// INGREDIENT ITEMS API

app.route('/api/subrecipes/:subrecipe_id/items')
  .get(function(req, res) {
    IngredientItem.findAll({where: { subrecipe_id: req.params.subrecipe_id }}).then(function(ingredient_items) {
      res.json(ingredient_items);
    })
  })
  .post(function(req, res) {
    var ingredient_item = IngredientItem.build(_.pick(req.body, ['ingredient_id', 'quantity', 'description']));
    ingredient_item.set('subrecipe_id', req.params.subrecipe_id);
    ingredient_item.save().then(function(ingredient_item){
      res.json(ingredient_item);
    });
  });

app.route('/api/subrecipes/:subrecipe_id/items/:id')
  .get(function(req, res) {
    IngredientItem.findById(req.params.id).then(function(ingredient_item) {
      res.json(ingredient_item);
    });
  })
  .put(function(req, res) {
    IngredientItem.findById(req.params.id).then(function(ingredient_item) {
      ingredient_item.update(_.pick(req.body, ['ingredient_id', 'quantity', 'description'])).then(function(ingredient_item) {
        res.json(ingredient_item);
      });
    });
  })
  .delete(function(req, res) {
    IngredientItem.findById(req.params.id).then(function(ingredient_item) {
      ingredient_item.destroy().then(function(ingredient_item) {
        res.json(ingredient_item);
      });
    });
  });


// Redirect all non api requests to the index
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Starting express server
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('oni.db');
// var check;
// db.serialize(() => {

//     db.run(`CREATE TABLE if not exists Ingredient (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT NOT NULL UNIQUE,
//         price REAL NOT NULL,
//         supplier TEXT
//         )`);

//     db.run(`CREATE TABLE if not exists Category (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT NOT NULL UNIQUE
//         )`);

//     db.run(`CREATE TABLE if not exists Recipe (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT NOT NULL UNIQUE,
//         category_id INTEGER REFERENCES Category (id)
//             ON UPDATE CASCADE ON DELETE CASCADE
//         )`);

//     db.run(`CREATE TABLE if not exists SubRecipe (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT NOT NULL UNIQUE,
//         recipe_id INTEGER REFERENCES Recipe (id)
//             ON UPDATE CASCADE ON DELETE CASCADE
//         )`);

//     db.run(`CREATE TABLE if not exists SubRecipeToIngredient (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         subrecipe_id INTEGER REFERENCES SubRecipe (id)
//             ON UPDATE CASCADE ON DELETE CASCADE,
//         ingredient_id INTEGER REFERENCES Ingredient (id)
//             ON UPDATE CASCADE ON DELETE CASCADE,
//         quantity REAL,
//         description TEXT
//         )`);

//     for (var i = 1; i < 6; i++) {
//         db.run(`INSERT INTO Ingredient VALUES (${i}, 'Ingredient${i}', 0, '')`);
//     }

//     db.each("SELECT id, name, price, supplier FROM Ingredient", (err, i) => {
//         console.log(i.id + ": " + i.name);
//     });
// });

// db.close();