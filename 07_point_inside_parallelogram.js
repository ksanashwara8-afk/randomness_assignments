const r = require("raylib");

function getPoint(p) {
    const a = Math.random();
    const b = Math.random();

    return {
        x: p.A.x + a * p.u.x + b * p.v.x,
        y: p.A.y + a * p.u.y + b * p.v.y,
    };
}

function setup() {
    const screen = {
        WIDTH: 700,
        HEIGHT: 400,
        FPS: 30,
        TITLE: "Random points inside parallelogram",
    };
    const points = [];
    const pllgm = {
        v: { x: 50, y: -150 },
        u: { x: 300, y: 0 },
        A: { x: 200, y: 300 },
    };
    pllgm.B = r.Vector2Add(pllgm.A, pllgm.u);
    pllgm.C = r.Vector2Add(pllgm.A, r.Vector2Add(pllgm.u, pllgm.v));
    pllgm.D = r.Vector2Add(pllgm.A, pllgm.v);

    for (let i = 0; i < 140; i++) points.push(getPoint(pllgm));

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.TITLE);
    r.SetTargetFPS(screen.FPS);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    return { screen, points, pllgm };
}

function drawCircles(point) {
    r.DrawCircleV(point, 8, r.ColorAlpha(r.GOLD, 0.6));
}

function drawPllgm(p) {
    r.DrawLineV(p.A, p.B, r.WHITE);
    r.DrawLineV(p.B, p.C, r.WHITE);
    r.DrawLineV(p.D, p.C, r.WHITE);
    r.DrawLineV(p.D, p.A, r.WHITE);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    for (const point of world.points) {
        drawCircles(point);
    }
    drawPllgm(world.pllgm);

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
