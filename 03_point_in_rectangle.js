const r = require("raylib");

function getPoint(screen) {
    const x = Math.floor(Math.random() * screen.WIDTH);
    const y = Math.floor(Math.random() * screen.HEIGHT);
    return { x, y };
}

function setup() {
    const screen = {
        WIDTH: 400,
        HEIGHT: 300,
        FPS: 30,
        TITLE: "Random points",
    };
    const points = [];

    for (let i = 0; i < 150; i++) points.push(getPoint(screen));

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.TITLE);
    r.SetTargetFPS(screen.FPS);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    return { screen, points };
}

function drawCircles(point) {
    r.DrawCircleV(point, 8, r.ColorAlpha(r.WHITE, 0.5));
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    for (const point of world.points) {
        drawCircles(point);
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
