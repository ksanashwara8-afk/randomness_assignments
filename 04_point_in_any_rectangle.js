const r = require("raylib");

function setup() {
    const world = {
        screen: {
            WIDTH: 400,
            HEIGHT: 300,
            FPS: 50,
            TITLE: "Random",
        },
        rect: {
            x: 50,
            y: 50,
            width: 200,
            height: 150,
        },
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.screen.WIDTH, world.screen.HEIGHT, world.screen.TITLE);
    r.SetTargetFPS(world.screen.FPS);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    return world;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangleRect(world.rect, r.WHITE);
    const color = { r: 255, g: 255, b: 255, a: 180 };

    for (let i = 0; i < 80; i++) {
        const x = Math.floor(Math.random() * world.screen.WIDTH + 0);
        const y = Math.floor(Math.random() * world.screen.HEIGHT + 0);
        r.DrawCircle(x, y, 3, color);
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
