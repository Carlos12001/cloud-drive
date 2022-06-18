require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const serverFiles = require("./routes/serverFiles")

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/serverFiles", serverFiles);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

const compression = require("./data/compression");

compression.compress("hellow.txt",
    "\n" +
    "\n" +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate pharetra lacus, ac pulvinar sapien aliquam at. Nunc sollicitudin dictum hendrerit. Duis convallis luctus ullamcorper. Phasellus sit amet tellus ac tellus varius tincidunt vel vitae diam. Mauris et bibendum nulla. Phasellus congue eros eget gravida vehicula. Morbi et turpis orci. Sed lorem justo, convallis vitae facilisis ut, congue quis neque. Cras eget convallis massa. Mauris a enim nulla. Nulla gravida erat diam, in luctus orci laoreet consectetur.\n" +
    "\n" +
    "Aenean nec fringilla nunc, nec ultrices elit. In maximus sollicitudin ligula, vitae placerat diam. Aliquam ac pulvinar tortor. Duis pharetra eros at ligula pellentesque commodo. Nulla facilisi. Donec ligula mauris, tempus eget porta mollis, porta sit amet urna. Integer ut malesuada massa, eu ullamcorper dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus mattis malesuada erat, vel auctor massa commodo at. Maecenas nisl nisl, aliquam rutrum nibh sed, cursus cursus quam. Aenean vehicula sem vitae justo pretium, eget pulvinar velit euismod. Donec finibus nisl nec posuere condimentum. Nunc aliquet nibh non enim pellentesque faucibus. Morbi quis nibh hendrerit, consectetur lectus vel, euismod felis.\n" +
    "\n" +
    "Integer pharetra facilisis diam quis tempor. Aenean lacinia sed quam eget volutpat. Sed pellentesque sem ac vulputate aliquet. Pellentesque et magna non risus consectetur molestie. Donec consequat semper est nec congue. Mauris in nulla quis libero volutpat vulputate sit amet at nibh. Nullam viverra finibus eros, ac accumsan tortor rutrum et.\n" +
    "\n" +
    "Aliquam efficitur, tellus ut rutrum feugiat, enim felis malesuada augue, ut pharetra odio tellus sed risus. Suspendisse et posuere nisl. Ut vehicula efficitur est a luctus. In hac habitasse platea dictumst. Fusce molestie mauris ac leo fringilla molestie. Proin suscipit, mauris vel ornare pharetra, odio lacus mattis lorem, vel convallis erat erat finibus leo. Fusce rhoncus purus justo, efficitur maximus odio facilisis vel. In vestibulum finibus risus vel commodo. Nulla aliquam dolor mattis dui tempor, eu facilisis sem maximus.\n" +
    "\n" +
    "Suspendisse quam nulla, laoreet ut nisi sit amet, tempor dignissim leo. Quisque blandit orci velit, nec euismod sapien ultrices sed. Etiam rutrum, diam id dapibus porta, justo enim ultricies odio, eget ullamcorper nisl purus sit amet dolor. Donec consectetur lobortis vehicula. Curabitur tristique, eros sit amet condimentum aliquam, velit enim ultricies urna, quis convallis velit lacus vitae odio. Mauris quam eros, lacinia ut lorem id, vehicula ornare felis. Phasellus volutpat placerat nisl at sollicitudin. Sed vulputate elit libero, quis fermentum diam gravida in. Ut laoreet metus ut enim varius, eu porttitor dolor consectetur. Etiam a ultrices mi. Suspendisse ullamcorper molestie mi ut pharetra. Donec tempor, tellus nec eleifend placerat, quam ex sodales mauris, sed interdum leo nulla vel felis. Pellentesque placerat, nunc et efficitur pellentesque, purus odio dictum lorem, at consectetur libero lacus vel ante.\n" +
    "\n" +
    "Nam sit amet molestie orci. Donec congue lectus at magna eleifend, nec vestibulum augue gravida. Suspendisse sit amet dignissim odio. Vivamus varius, libero a gravida ultricies, turpis lorem mattis mi, nec vehicula metus orci porta lorem. Donec vitae feugiat augue, eu pellentesque enim. Vivamus fermentum mauris vel sem congue posuere. Aenean velit nunc, efficitur nec varius eu, sagittis quis risus. In hac habitasse platea dictumst. Suspendisse elementum mi a magna dapibus, pharetra commodo eros aliquam. Nulla non consequat mauris.\n" +
    "\n" +
    "Sed aliquam vitae ante in convallis. Pellentesque at consectetur nisi. Vestibulum quis tempus sapien. Nulla posuere tellus quis risus tempus pretium. Morbi ac bibendum velit, vitae feugiat sapien. Quisque ut tristique nisi. In gravida velit vitae nisl interdum, eget convallis nibh congue. Quisque ipsum mauris, faucibus sed ligula ut, pretium venenatis purus. Nulla rhoncus placerat interdum. Sed enim ipsum, commodo vitae magna eget, ornare pretium turpis. Donec vel metus enim. Ut elit ante, condimentum consectetur pulvinar et, dictum vitae est. Duis pulvinar ex a purus varius placerat non sed ante. Sed dignissim elit at orci consectetur condimentum. Praesent id elementum enim, et consectetur arcu.\n" +
    "\n" +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, ipsum vitae molestie elementum, lacus turpis venenatis mi, ac luctus arcu leo eu erat. Quisque semper felis magna, quis varius mi pellentesque ut. Maecenas at leo ut purus pellentesque fringilla eu eu mauris. Pellentesque lobortis nibh id dui rhoncus, at sollicitudin mauris ultricies. Suspendisse potenti. Vivamus sed mauris lectus. Nunc sit amet efficitur quam.\n" +
    "\n" +
    "In pellentesque urna eros, id condimentum ligula pulvinar in. Phasellus orci sapien, porta sit amet aliquam vel, tempus imperdiet nisi. Etiam vitae consequat lacus, sed mollis felis. Aliquam sodales neque sed est interdum vehicula. Integer et pharetra felis, non semper purus. Pellentesque id felis cursus, lobortis sem vel, feugiat sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ante pellentesque, mollis lorem id, vehicula mi. Integer faucibus purus nec urna fermentum viverra. Proin euismod urna massa, ut euismod justo tristique eu. Vivamus id bibendum lectus, lobortis aliquam purus. Etiam massa nisi, mollis ac gravida a, consectetur in justo. Cras cursus tincidunt tincidunt.\n" +
    "\n" +
    "Nam sollicitudin at velit at fringilla. Aliquam ligula risus, laoreet vel quam in, mollis scelerisque velit. Praesent venenatis dignissim luctus. Etiam aliquam lectus quis lacus bibendum, in rhoncus justo tempus. Proin consequat, leo quis porta tristique, est sem pretium lectus, eget efficitur augue augue id urna. Sed finibus nunc velit, in consectetur massa ultricies et. Nullam a turpis ut elit euismod fermentum ac varius tortor. Nam id turpis orci. Nulla bibendum ipsum at neque posuere ullamcorper. Proin eget egestas risus, quis volutpat ligula. Nam sed urna in erat feugiat porttitor. Proin commodo mollis arcu, a tempus nunc accumsan at. Sed dapibus arcu ut turpis aliquet dictum. Donec ac posuere mi. Nullam iaculis at nisi venenatis pellentesque. ", "lz78");