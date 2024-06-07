const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

app.use(cors());
app.use(express.json());

// Routes

// load faces//

// get top ten faces
app.get("/faces", async (req, res) => {
  try {
    const topFaces = await pool.query(
      "SELECT * FROM faces ORDER BY face_likes DESC LIMIT 10"
    );
    res.json(topFaces.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a face
app.get("/faces/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const face = await pool.query("SELECT * FROM faces WHERE face_id = $1", [
      id,
    ]);

    res.json(face.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update like count
app.put("/faces/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { likes } = req.body;
    const updateFace = await pool.query(
      "UPDATE faces SET face_likes = $1 WHERE face_id = $2",
      [likes, id]
    );

    res.json("Face was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server starting on port 5000");
});
