const r = require("raylib");

function getPoint(x1, x2) {
    return Math.random() * (x2 - x1) + x1;
}

function setup() {
    screen = {
        WIDTH: 400,
        HEIGHT: 300,
        FPS: 30,
        TITLE: "Random between x1 and x2",
    };
    points = [];

    for (let i = 0; i < 40; i++) points.push(getPoint(50, 200));

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.TITLE);
    r.SetTargetFPS(screen.FPS);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    return { screen, points };
}

function drawLines(screen, point) {
    r.DrawLine(point, 0, point, screen.HEIGHT, r.WHITE);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    for (const point of world.points) {
        drawLines(world.screen, point);
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
