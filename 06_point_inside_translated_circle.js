const r = require("raylib");

function getPoint(c) {
    const angle = Math.random() * 2 * Math.PI;

    const x = Math.random() * c.radius * Math.cos(angle) + c.x;
    const y = Math.random() * c.radius * Math.sin(angle) + c.y;

    return { x, y };
}

function setup() {
    const screen = {
        WIDTH: 600,
        HEIGHT: 400,
        FPS: 30,
        TITLE: "Random points inside translated circle",
    };
    const points = [];
    const circle = {
        x: 300,
        y: 200,
        radius: 120,
    };

    for (let i = 0; i < 140; i++) points.push(getPoint(circle));

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.TITLE);
    r.SetTargetFPS(screen.FPS);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    return { screen, points, circle };
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
    r.DrawCircleLines(
        world.circle.x,
        world.circle.y,
        world.circle.radius,
        r.WHITE,
    );

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
