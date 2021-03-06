$(document).ready(() => {
  console.log("Ready!");
  const swordSwipe = new Audio(
    "/sound effects/zapsplat_impact_sword_swipe_into_large_wood_hit_002_43692.mp3"
  );
  const bodyFall = new Audio(
    "/sound effects/johnj_human_impact_weapon_body_fall_sword_or_bat.mp3"
  );
  const laugh1 = new Audio(
    "/sound effects/little_robot_sound_factory_Laugh_Evil_02.mp3"
  );
  const laugh2 = new Audio(
    "/sound effects/zapsplat_horror_male_low_pitched_evil_laughter_001_23951.mp3"
  );
  const welcome1 = new Audio("/sound effects/welcometothedungeon2.wav");

  $("#logoImg").click(() => {
    const blood = $("#blood-smear");
    swordSwipe.play();
    blood.show();
    // blood.animate({
    //     left: -600
    // });
    // blood.animate({
    //     left: 500
    // });
    blood.fadeOut(1000);
    // blood.animate({
    //     left: -600
    // });
  });

  $("#enterImg").click(() => {
    bodyFall.play();
    welcome1.play();
    $(".header-banner").fadeOut(2000);
    $(".body-section").fadeOut(2000);

    setTimeout(() => {
      window.location.href = "/howTo";
    }, 1500);
  });
});
