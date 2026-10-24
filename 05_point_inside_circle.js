const r = require("raylib");

function getPoint(radius) {
    const angle = Math.random() * 2 * Math.PI;

    const x = Math.random() * radius * Math.cos(angle);
    const y = Math.random() * radius * Math.sin(angle);

    return { x, y };
}

function setup() {
    const screen = {
        WIDTH: 600,
        HEIGHT: 400,
        FPS: 30,
        TITLE: "Random points inside a circle",
    };
    const points = [];
    const radius = 300;

    for (let i = 0; i < 500; i++) points.push(getPoint(radius));

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.TITLE);
    r.SetTargetFPS(screen.FPS);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    return { screen, points, radius };
}

function drawCircles(point) {
    r.DrawCircleV(point, 8, r.ColorAlpha(r.GOLD, 0.6));
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    for (const point of world.points) {
        drawCircles(point);
    }
    r.DrawCircleLines(0, 0, world.radius, r.RAYWHITE);

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
