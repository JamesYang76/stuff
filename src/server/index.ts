import app from "./app"
import { PORT } from "./constant";

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
