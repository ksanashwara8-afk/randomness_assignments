const r = require("raylib");

function setup() {
    const world = {
        screen: {
            WIDTH: 400,
            HEIGHT: 400,
            FPS: 30,
            TITLE: "Random between 0 and x",
        },
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.screen.WIDTH, world.screen.HEIGHT, world.screen.TITLE);
    r.SetTargetFPS(world.screen.FPS);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    return world;
}

function drawLines(screen, point) {
    r.DrawLine(point, 0, point, screen.HEIGHT, r.WHITE);
}
function getPoint() {
    if (r.IsKeyPressed(r.KEY_ENTER)) {
        return Math.random() * 400;
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);
    for (let i = 0; i < 50; i++) {
        drawLines(world.screen, getPoint());
    }

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function teardown() {
    r.CloseWindow();
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
