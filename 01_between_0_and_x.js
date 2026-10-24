const r = require("raylib");

function getPoint() {
    return Math.random() * 400;
}

function setup() {
    const world = {
        screen: {
            WIDTH: 400,
            HEIGHT: 400,
            FPS: 30,
            TITLE: "Random between 0 and x",
        },
        points: [],
    };

    for (let i = 0; i < 40; i++) world.points.push(getPoint());

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.screen.WIDTH, world.screen.HEIGHT, world.screen.TITLE);
    r.SetTargetFPS(world.screen.FPS);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    return world;
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
