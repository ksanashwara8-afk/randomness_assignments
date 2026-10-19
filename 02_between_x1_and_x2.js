const r = require("raylib");

function setup() {
    const world = {
        screen: {
            WIDTH: 400,
            HEIGHT: 300,
            FPS: 30,
            TITLE: "Random between x1 and x2",
        },
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.screen.WIDTH, world.screen.HEIGHT, world.screen.TITLE);
    r.SetTargetFPS(world.screen.FPS);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    return world;
}

function drawLines(screen) {
    const x = Math.floor(Math.random() * (200 - 50) + 50);
    r.DrawLine(x, 0, x, screen.HEIGHT, r.WHITE);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);
    for (let i = 0; i < 50; i++) {
        drawLines(world.screen);
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
