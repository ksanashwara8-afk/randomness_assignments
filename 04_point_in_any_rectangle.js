// const r = require("raylib");

// function setup() {
//     const world = {
//         screen: {
//             WIDTH: 400,
//             HEIGHT: 300,
//             FPS: 30,
//             TITLE: "Random points in any rectangle",
//         },
//         rect: {
//             x: 70,
//             y: 70,
//             width: 250,
//             height: 180,
//         },
//     };

//     r.SetTraceLogLevel(r.LOG_NONE);
//     r.InitWindow(world.screen.WIDTH, world.screen.HEIGHT, world.screen.TITLE);
//     r.SetTargetFPS(world.screen.FPS);
//     r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

//     return world;
// }

// function drawPoints(rect, color) {
//     const x = Math.floor(Math.random() * rect.width + rect.x);
//     const y = Math.floor(Math.random() * rect.height + rect.y);
//     r.DrawCircle(x, y, 5, color);
// }

// function draw(world) {
//     r.BeginDrawing();
//     r.ClearBackground(r.DARKBLUE);
//     const color = { r: 255, g: 255, b: 255, a: 180 };

//     r.DrawRectangleLinesEx(world.rect, 1, r.WHITE);

//     for (let i = 0; i < 80; i++) {
//         drawPoints(world.rect, color);
//     }

//     r.EndDrawing();
// }

// function loop(world) {
//     while (!r.WindowShouldClose()) {
//         draw(world);
//     }
// }

// function teardown() {
//     r.CloseWindow();
// }

// function main() {
//     const world = setup();
//     loop(world);
//     teardown();
// }

// main();
const r = require("raylib");

function getPoint(rect) {
    const x = Math.floor(Math.random() * rect.width + rect.x);
    const y = Math.floor(Math.random() * rect.height + rect.y);
    return { x, y };
}

function setup() {
    const screen = {
        WIDTH: 600,
        HEIGHT: 400,
        FPS: 30,
        TITLE: "Random points in any rectangle",
    };
    const rect = {
        x: 90,
        y: 90,
        width: 380,
        height: 230,
    };
    const points = [];

    for (let i = 0; i < 180; i++) points.push(getPoint(rect));

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.TITLE);
    r.SetTargetFPS(screen.FPS);
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);

    return { screen, rect, points };
}

function drawCircles(point) {
    r.DrawCircleV(point, 8, r.ColorAlpha(r.WHITE, 0.5));
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    r.DrawRectangleLinesEx(world.rect, 1, r.WHITE);

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
