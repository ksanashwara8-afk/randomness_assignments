const r = require("raylib");

function setup() {
    const world = {
        screen: {
            WIDTH: 400,
            HEIGHT: 300,
            FPS: 30,
            TITLE: "Random points",
        },
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.screen.WIDTH, world.screen.HEIGHT, world.screen.TITLE);
    r.SetTargetFPS(world.screen.FPS);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    return world;
}

function drawPoints(screen, color) {
    const x = Math.floor(Math.random() * screen.WIDTH);
    const y = Math.floor(Math.random() * screen.HEIGHT);
    r.DrawCircle(x, y, 5, color);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);
    const color = { r: 255, g: 255, b: 255, a: 180 };

    for (let i = 0; i < 80; i++) {
        drawPoints(world.screen, color);
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
