// Items nothing in this build produces: no recipe, no loot table, so no viewer can
// show where they come from. Each line was read out of the mod that owns the item
// and checked by a second pass against the same jar.

RecipeViewerEvents.addInformation('item', (event) => {
    const hints = [
        {
            filter: [
                'xycraft_world:lamp_cube_black',
                'xycraft_world:lamp_cube_blue',
                'xycraft_world:lamp_cube_brown',
                'xycraft_world:lamp_cube_cyan',
                'xycraft_world:lamp_cube_gray',
                'xycraft_world:lamp_cube_green',
                'xycraft_world:lamp_cube_light_blue',
                'xycraft_world:lamp_cube_light_gray',
                'xycraft_world:lamp_cube_lime',
                'xycraft_world:lamp_cube_magenta',
                'xycraft_world:lamp_cube_orange',
                'xycraft_world:lamp_cube_pink',
                'xycraft_world:lamp_cube_purple',
                'xycraft_world:lamp_cube_red',
                'xycraft_world:lamp_cube_yellow',
                'xycraft_world:lamp_flush_black',
                'xycraft_world:lamp_flush_blue',
                'xycraft_world:lamp_flush_brown',
                'xycraft_world:lamp_flush_cyan',
                'xycraft_world:lamp_flush_gray',
                'xycraft_world:lamp_flush_green',
                'xycraft_world:lamp_flush_light_blue',
                'xycraft_world:lamp_flush_light_gray',
                'xycraft_world:lamp_flush_lime',
                'xycraft_world:lamp_flush_magenta',
                'xycraft_world:lamp_flush_orange',
                'xycraft_world:lamp_flush_pink',
                'xycraft_world:lamp_flush_purple',
                'xycraft_world:lamp_flush_red',
                'xycraft_world:lamp_flush_yellow',
                'xycraft_world:lamp_lantern_black',
                'xycraft_world:lamp_lantern_blue',
                'xycraft_world:lamp_lantern_brown',
                'xycraft_world:lamp_lantern_cyan',
                'xycraft_world:lamp_lantern_gray',
                'xycraft_world:lamp_lantern_green',
                'xycraft_world:lamp_lantern_light_blue',
                'xycraft_world:lamp_lantern_light_gray',
                'xycraft_world:lamp_lantern_lime',
                'xycraft_world:lamp_lantern_magenta',
                'xycraft_world:lamp_lantern_orange',
                'xycraft_world:lamp_lantern_pink',
                'xycraft_world:lamp_lantern_purple',
                'xycraft_world:lamp_lantern_red',
                'xycraft_world:lamp_lantern_yellow',
                'xycraft_world:lamp_pillar_black',
                'xycraft_world:lamp_pillar_blue',
                'xycraft_world:lamp_pillar_brown',
                'xycraft_world:lamp_pillar_cyan',
                'xycraft_world:lamp_pillar_gray',
                'xycraft_world:lamp_pillar_green',
                'xycraft_world:lamp_pillar_light_blue',
                'xycraft_world:lamp_pillar_light_gray',
                'xycraft_world:lamp_pillar_lime',
                'xycraft_world:lamp_pillar_magenta',
                'xycraft_world:lamp_pillar_orange',
                'xycraft_world:lamp_pillar_pink',
                'xycraft_world:lamp_pillar_purple',
                'xycraft_world:lamp_pillar_red',
                'xycraft_world:lamp_pillar_yellow'
            ],
            text: [Text.translate('ll8.info.xycraft_world.dye_placed_lamp')]
        },
        {
            filter: [
                'xycraft_world:lamp_rgb_glowing_black',
                'xycraft_world:lamp_rgb_glowing_blue',
                'xycraft_world:lamp_rgb_glowing_brown',
                'xycraft_world:lamp_rgb_glowing_cyan',
                'xycraft_world:lamp_rgb_glowing_gray',
                'xycraft_world:lamp_rgb_glowing_green',
                'xycraft_world:lamp_rgb_glowing_inverted_black',
                'xycraft_world:lamp_rgb_glowing_inverted_blue',
                'xycraft_world:lamp_rgb_glowing_inverted_brown',
                'xycraft_world:lamp_rgb_glowing_inverted_cyan',
                'xycraft_world:lamp_rgb_glowing_inverted_gray',
                'xycraft_world:lamp_rgb_glowing_inverted_green',
                'xycraft_world:lamp_rgb_glowing_inverted_light_blue',
                'xycraft_world:lamp_rgb_glowing_inverted_light_gray',
                'xycraft_world:lamp_rgb_glowing_inverted_lime',
                'xycraft_world:lamp_rgb_glowing_inverted_magenta',
                'xycraft_world:lamp_rgb_glowing_inverted_orange',
                'xycraft_world:lamp_rgb_glowing_inverted_pink',
                'xycraft_world:lamp_rgb_glowing_inverted_purple',
                'xycraft_world:lamp_rgb_glowing_inverted_red',
                'xycraft_world:lamp_rgb_glowing_inverted_yellow',
                'xycraft_world:lamp_rgb_glowing_light_blue',
                'xycraft_world:lamp_rgb_glowing_light_gray',
                'xycraft_world:lamp_rgb_glowing_lime',
                'xycraft_world:lamp_rgb_glowing_magenta',
                'xycraft_world:lamp_rgb_glowing_orange',
                'xycraft_world:lamp_rgb_glowing_pink',
                'xycraft_world:lamp_rgb_glowing_purple',
                'xycraft_world:lamp_rgb_glowing_red',
                'xycraft_world:lamp_rgb_glowing_yellow'
            ],
            text: [Text.translate('ll8.info.xycraft_world.dye_placed_rgb_lamp')]
        },
        {
            filter: [
                'xycraft_world:glass_viewer_rgb_black',
                'xycraft_world:glass_viewer_rgb_blue',
                'xycraft_world:glass_viewer_rgb_brown',
                'xycraft_world:glass_viewer_rgb_cyan',
                'xycraft_world:glass_viewer_rgb_glowing_black',
                'xycraft_world:glass_viewer_rgb_glowing_blue',
                'xycraft_world:glass_viewer_rgb_glowing_brown',
                'xycraft_world:glass_viewer_rgb_glowing_cyan',
                'xycraft_world:glass_viewer_rgb_glowing_gray',
                'xycraft_world:glass_viewer_rgb_glowing_green',
                'xycraft_world:glass_viewer_rgb_glowing_light_blue',
                'xycraft_world:glass_viewer_rgb_glowing_light_gray',
                'xycraft_world:glass_viewer_rgb_glowing_lime',
                'xycraft_world:glass_viewer_rgb_glowing_magenta',
                'xycraft_world:glass_viewer_rgb_glowing_orange',
                'xycraft_world:glass_viewer_rgb_glowing_pink',
                'xycraft_world:glass_viewer_rgb_glowing_purple',
                'xycraft_world:glass_viewer_rgb_glowing_red',
                'xycraft_world:glass_viewer_rgb_glowing_yellow',
                'xycraft_world:glass_viewer_rgb_gray',
                'xycraft_world:glass_viewer_rgb_green',
                'xycraft_world:glass_viewer_rgb_light_blue',
                'xycraft_world:glass_viewer_rgb_light_gray',
                'xycraft_world:glass_viewer_rgb_lime',
                'xycraft_world:glass_viewer_rgb_magenta',
                'xycraft_world:glass_viewer_rgb_orange',
                'xycraft_world:glass_viewer_rgb_pink',
                'xycraft_world:glass_viewer_rgb_purple',
                'xycraft_world:glass_viewer_rgb_red',
                'xycraft_world:glass_viewer_rgb_yellow'
            ],
            text: [Text.translate('ll8.info.xycraft_world.dye_placed_rgb_glass')]
        },
        {
            filter: [
                'xycraft_world:aurey_block_matte_black',
                'xycraft_world:aurey_block_matte_blue',
                'xycraft_world:aurey_block_matte_brown',
                'xycraft_world:aurey_block_matte_cyan',
                'xycraft_world:aurey_block_matte_glowing_black',
                'xycraft_world:aurey_block_matte_glowing_blue',
                'xycraft_world:aurey_block_matte_glowing_brown',
                'xycraft_world:aurey_block_matte_glowing_cyan',
                'xycraft_world:aurey_block_matte_glowing_gray',
                'xycraft_world:aurey_block_matte_glowing_green',
                'xycraft_world:aurey_block_matte_glowing_light_blue',
                'xycraft_world:aurey_block_matte_glowing_light_gray',
                'xycraft_world:aurey_block_matte_glowing_lime',
                'xycraft_world:aurey_block_matte_glowing_magenta',
                'xycraft_world:aurey_block_matte_glowing_orange',
                'xycraft_world:aurey_block_matte_glowing_purple',
                'xycraft_world:aurey_block_matte_glowing_red',
                'xycraft_world:aurey_block_matte_glowing_white',
                'xycraft_world:aurey_block_matte_glowing_yellow',
                'xycraft_world:aurey_block_matte_gray',
                'xycraft_world:aurey_block_matte_green',
                'xycraft_world:aurey_block_matte_light_blue',
                'xycraft_world:aurey_block_matte_light_gray',
                'xycraft_world:aurey_block_matte_lime',
                'xycraft_world:aurey_block_matte_magenta',
                'xycraft_world:aurey_block_matte_orange',
                'xycraft_world:aurey_block_matte_purple',
                'xycraft_world:aurey_block_matte_red',
                'xycraft_world:aurey_block_matte_white',
                'xycraft_world:aurey_block_matte_yellow'
            ],
            text: [Text.translate('ll8.info.xycraft_world.dye_placed_aurey_matte')]
        },
        {
            filter: [
                'xycraft_world:aurey_block_fx_black',
                'xycraft_world:aurey_block_fx_blue',
                'xycraft_world:aurey_block_fx_brown',
                'xycraft_world:aurey_block_fx_cyan',
                'xycraft_world:aurey_block_fx_glowing_black',
                'xycraft_world:aurey_block_fx_glowing_blue',
                'xycraft_world:aurey_block_fx_glowing_brown',
                'xycraft_world:aurey_block_fx_glowing_cyan',
                'xycraft_world:aurey_block_fx_glowing_gray',
                'xycraft_world:aurey_block_fx_glowing_green',
                'xycraft_world:aurey_block_fx_glowing_light_blue',
                'xycraft_world:aurey_block_fx_glowing_light_gray',
                'xycraft_world:aurey_block_fx_glowing_lime',
                'xycraft_world:aurey_block_fx_glowing_magenta',
                'xycraft_world:aurey_block_fx_glowing_orange',
                'xycraft_world:aurey_block_fx_glowing_pink',
                'xycraft_world:aurey_block_fx_glowing_purple',
                'xycraft_world:aurey_block_fx_glowing_red',
                'xycraft_world:aurey_block_fx_glowing_white',
                'xycraft_world:aurey_block_fx_glowing_yellow',
                'xycraft_world:aurey_block_fx_gray',
                'xycraft_world:aurey_block_fx_green',
                'xycraft_world:aurey_block_fx_light_blue',
                'xycraft_world:aurey_block_fx_light_gray',
                'xycraft_world:aurey_block_fx_lime',
                'xycraft_world:aurey_block_fx_magenta',
                'xycraft_world:aurey_block_fx_orange',
                'xycraft_world:aurey_block_fx_pink',
                'xycraft_world:aurey_block_fx_purple',
                'xycraft_world:aurey_block_fx_red',
                'xycraft_world:aurey_block_fx_white',
                'xycraft_world:aurey_block_fx_yellow'
            ],
            text: [Text.translate('ll8.info.xycraft_world.polish_aurey_with_stick')]
        },
        {
            filter: [
                'divinerpg:arcanite_blade',
                'divinerpg:arcanite_blaster',
                'divinerpg:arcanium_attractor',
                'divinerpg:arcanium_reflector',
                'divinerpg:arcanium_saber',
                'divinerpg:captains_sparkler',
                'divinerpg:divine_accumulator',
                'divinerpg:ender_scepter',
                'divinerpg:firefly',
                'divinerpg:generals_staff',
                'divinerpg:ghostbane',
                'divinerpg:korma_boots',
                'divinerpg:korma_chestplate',
                'divinerpg:korma_leggings',
                'divinerpg:la_vekor',
                'divinerpg:livicia_sword',
                'divinerpg:meriks_missile',
                'divinerpg:meteor_mash',
                'divinerpg:staff_of_enrichment',
                'divinerpg:staff_of_starlight',
                'divinerpg:starlight',
                'divinerpg:storm_sword',
                'divinerpg:vemos_boots',
                'divinerpg:vemos_chestplate',
                'divinerpg:vemos_leggings',
                'divinerpg:wizards_book'
            ],
            text: [Text.translate('ll8.info.divinerpg.trade_arcana_merchant')]
        },
        {
            filter: [
                'divinerpg:band_of_lheiva_hunting',
                'divinerpg:darven_arrow',
                'divinerpg:dream_axe',
                'divinerpg:dream_pickaxe',
                'divinerpg:dream_shovel',
                'divinerpg:ever_arrow',
                'divinerpg:karos_rockmaul',
                'divinerpg:moon_clock',
                'divinerpg:pardimal_arrow',
                'divinerpg:teaker_arrow'
            ],
            text: [Text.translate('ll8.info.divinerpg.trade_vethea_hunger')]
        },
        {
            filter: [
                'divinerpg:scythe',
                'divinerpg:wither_reaper_boots',
                'divinerpg:wither_reaper_chestplate',
                'divinerpg:wither_reaper_leggings'
            ],
            text: [Text.translate('ll8.info.divinerpg.trade_jack_o_man')]
        },
        {
            filter: [
                'divinerpg:fractite_cannon',
                'divinerpg:frostclaw_cannon',
                'divinerpg:snowstorm_bow',
                'divinerpg:sound_of_carols'
            ],
            text: [Text.translate('ll8.info.divinerpg.trade_iceika_tinkerer')]
        },
        {
            filter: [
                'divinerpg:glacial_wall_totem',
                'divinerpg:robbin_egg'
            ],
            text: [Text.translate('ll8.info.divinerpg.trade_iceika_groglin')]
        },
        {
            filter: [
                'divinerpg:divine_flame',
                'divinerpg:enchanted_flame',
                'divinerpg:hellfire',
                'divinerpg:icy_fire',
                'divinerpg:mortum_embers',
                'divinerpg:sky_fire'
            ],
            text: [Text.translate('ll8.info.divinerpg.throw_item_into_fire')]
        },
        {
            filter: [
                'divinerpg:apalachia_portal',
                'divinerpg:arcana_portal',
                'divinerpg:eden_portal',
                'divinerpg:iceika_portal',
                'divinerpg:mortum_portal',
                'divinerpg:skythern_portal',
                'divinerpg:vethea_portal',
                'divinerpg:wildwood_portal'
            ],
            text: [Text.translate('ll8.info.divinerpg.light_the_portal')]
        },
        {
            filter: [
                'divinerpg:cauldron_fish_bucket',
                'divinerpg:gem_fin_bucket'
            ],
            text: [Text.translate('ll8.info.divinerpg.catch_fish_with_water_bucket')]
        },
        {
            filter: [
                'starcatcher:agave_bream',
                'starcatcher:amethystback',
                'starcatcher:aquamarine_pike',
                'starcatcher:aurora',
                'starcatcher:bigeye_tuna',
                'starcatcher:black_eel',
                'starcatcher:blue_crystal_fin',
                'starcatcher:blue_herring',
                'starcatcher:blue_ice_pike',
                'starcatcher:bluegigi',
                'starcatcher:boreal',
                'starcatcher:bright_amethyst_snapper',
                'starcatcher:carpenjoe',
                'starcatcher:coggill',
                'starcatcher:cogtopus',
                'starcatcher:crystalback_boreal',
                'starcatcher:crystalback_minnow',
                'starcatcher:crystalback_sturgeon',
                'starcatcher:crystalback_trout',
                'starcatcher:dark_amethyst_snapper',
                'starcatcher:deepjaw_herring',
                'starcatcher:deepslatefish',
                'starcatcher:downfall_bream',
                'starcatcher:driftfin',
                'starcatcher:drifting_bream',
                'starcatcher:dripfin',
                'starcatcher:dusktail_snapper',
                'starcatcher:eel_dynamo',
                'starcatcher:elderscale',
                'starcatcher:fossilized_angelfish',
                'starcatcher:frostgill_chub',
                'starcatcher:frostjaw_trout',
                'starcatcher:garnet_mackerel',
                'starcatcher:geode_eel',
                'starcatcher:ghostly_pike',
                'starcatcher:glowing_dark',
                'starcatcher:gold_fan',
                'starcatcher:hollowbelly_darter',
                'starcatcher:icetooth_sturgeon',
                'starcatcher:ironjaw_herring',
                'starcatcher:lily_snapper',
                'starcatcher:mechanical_brass_snail',
                'starcatcher:mechanical_snail',
                'starcatcher:meka_agave_bream',
                'starcatcher:mirage_carp',
                'starcatcher:mistback_chub',
                'starcatcher:morganite',
                'starcatcher:mossfin',
                'starcatcher:oasis_sturgeon',
                'starcatcher:obidontiee',
                'starcatcher:pale_carp',
                'starcatcher:pale_pinfish',
                'starcatcher:peakdweller',
                'starcatcher:petal_bass',
                'starcatcher:petaldrift_carp',
                'starcatcher:phillipsfish',
                'starcatcher:pinfish',
                'starcatcher:pink_koi',
                'starcatcher:pipehead',
                'starcatcher:rainfin',
                'starcatcher:ripple_catfish',
                'starcatcher:rockgill',
                'starcatcher:rose_siamese_fish',
                'starcatcher:sage_catfish',
                'starcatcher:sandtail',
                'starcatcher:scorchfish',
                'starcatcher:sea_bass',
                'starcatcher:shadowfin',
                'starcatcher:silverfin_pike',
                'starcatcher:silverveil_perch',
                'starcatcher:stonefish',
                'starcatcher:sun_seeking_carp',
                'starcatcher:sunny_sturgeon',
                'starcatcher:the_quarrish',
                'starcatcher:twilight_koi',
                'starcatcher:valve',
                'starcatcher:vesani',
                'starcatcher:vivid_moss',
                'starcatcher:ward',
                'starcatcher:whiteveil',
                'starcatcher:willow_bream',
                'starcatcher:wintery_pike',
                'starcatcher:yellowstone_fish'
            ],
            text: [Text.translate('ll8.info.starcatcher.fish_water')]
        },
        {
            filter: [
                'starcatcher:brassgill',
                'starcatcher:cerberay',
                'starcatcher:cinder_squid',
                'starcatcher:drive_pike',
                'starcatcher:embergill',
                'starcatcher:glowstone_pufferfish',
                'starcatcher:glowstone_seeker',
                'starcatcher:lava_crab',
                'starcatcher:lava_crab_claw',
                'starcatcher:molten_deepslate_crab',
                'starcatcher:molten_shrimp',
                'starcatcher:pyrotrout',
                'starcatcher:scalding_pike',
                'starcatcher:scorched_bloodsucker',
                'starcatcher:suneater'
            ],
            text: [Text.translate('ll8.info.starcatcher.fish_lava')]
        },
        {
            filter: [
                'starcatcher:charfish',
                'starcatcher:chorus_crab',
                'starcatcher:chorus_minnow',
                'starcatcher:cloudfin',
                'starcatcher:end_glow',
                'starcatcher:nebula_squid',
                'starcatcher:purple_carp',
                'starcatcher:spacejelly',
                'starcatcher:voidbiter',
                'starcatcher:voidfin'
            ],
            text: [Text.translate('ll8.info.starcatcher.fish_air')]
        },
        {
            filter: [
                'starcatcher:starcaught_bucket',
                'starcatcher:starcaught_lava_bucket'
            ],
            text: [Text.translate('ll8.info.starcatcher.bucket_bait_slot')]
        },
        {
            filter: [
                'starcatcher:message_in_a_bottle'
            ],
            text: [Text.translate('ll8.info.starcatcher.fish_up_bottle')]
        },
        {
            filter: [
                'starcatcher:broken_bottle',
                'starcatcher:message'
            ],
            text: [Text.translate('ll8.info.starcatcher.open_bottle')]
        },
        {
            filter: [
                'chemlib:acetic_acid_bucket',
                'chemlib:acetylene_bucket',
                'chemlib:ammonia_bucket',
                'chemlib:ammonium_bucket',
                'chemlib:argon_bucket',
                'chemlib:bromine_bucket',
                'chemlib:butane_bucket',
                'chemlib:carbon_dioxide_bucket',
                'chemlib:carbon_disulfide_bucket',
                'chemlib:carbon_monoxide_bucket',
                'chemlib:chlorine_bucket',
                'chemlib:epinephrine_bucket',
                'chemlib:ethane_bucket',
                'chemlib:ethanol_bucket',
                'chemlib:ethylene_bucket',
                'chemlib:fluorine_bucket',
                'chemlib:helium_bucket',
                'chemlib:hexane_bucket',
                'chemlib:hydrochloric_acid_bucket',
                'chemlib:hydrogen_bucket',
                'chemlib:hydrogen_sulfide_bucket',
                'chemlib:krypton_bucket',
                'chemlib:methane_bucket',
                'chemlib:neon_bucket',
                'chemlib:nitric_acid_bucket',
                'chemlib:nitric_oxide_bucket',
                'chemlib:nitrogen_bucket',
                'chemlib:nitrogen_dioxide_bucket',
                'chemlib:oxygen_bucket',
                'chemlib:pentane_bucket',
                'chemlib:propane_bucket',
                'chemlib:radon_bucket',
                'chemlib:sulfur_dioxide_bucket',
                'chemlib:sulfur_trioxide_bucket',
                'chemlib:sulfuric_acid_bucket',
                'chemlib:xenon_bucket'
            ],
            text: [Text.translate('ll8.info.chemlib.bucket_from_liquifier')]
        },
        {
            filter: [
                'neovitae:copper_dust',
                'neovitae:copper_fragment',
                'neovitae:copper_gravel',
                'neovitae:gold_dust',
                'neovitae:gold_fragment',
                'neovitae:gold_gravel',
                'neovitae:iron_dust',
                'neovitae:iron_fragment',
                'neovitae:iron_gravel',
                'neovitae:netherite_scrap_dust',
                'neovitae:netherite_scrap_fragment',
                'neovitae:netherite_scrap_gravel'
            ],
            text: [Text.translate('ll8.info.neovitae.athanor_ore_processing')]
        },
        {
            filter: [
                'neovitae:base_spiritus_soul_invictus',
                'neovitae:base_spiritus_soul_nihilum',
                'neovitae:base_spiritus_soul_raw',
                'neovitae:base_spiritus_soul_ruina',
                'neovitae:base_spiritus_soul_vindicta'
            ],
            text: [Text.translate('ll8.info.neovitae.kill_with_sentient_or_dagger')]
        },
        {
            filter: [
                'neovitae:tabula_ampoule'
            ],
            text: [Text.translate('ll8.info.neovitae.syringe_dagger_kill')]
        },
        {
            filter: [
                'otakomod_anime_characters:altair_suit_boots',
                'otakomod_anime_characters:altair_suit_chestplate',
                'otakomod_anime_characters:altair_suit_helmet',
                'otakomod_anime_characters:altair_suit_leggings',
                'otakomod_anime_characters:ban_cloth_boots',
                'otakomod_anime_characters:ban_cloth_chestplate',
                'otakomod_anime_characters:ban_cloth_leggings',
                'otakomod_anime_characters:diane_cloth_boots',
                'otakomod_anime_characters:diane_cloth_chestplate',
                'otakomod_anime_characters:diane_cloth_leggings',
                'otakomod_anime_characters:escanor_cloth_boots',
                'otakomod_anime_characters:escanor_cloth_chestplate',
                'otakomod_anime_characters:escanor_cloth_helmet',
                'otakomod_anime_characters:escanor_cloth_leggings',
                'otakomod_anime_characters:gowther_cloth_boots',
                'otakomod_anime_characters:gowther_cloth_chestplate',
                'otakomod_anime_characters:gowther_cloth_helmet',
                'otakomod_anime_characters:gowther_cloth_leggings',
                'otakomod_anime_characters:hideri_kanzaki_cloth_boots',
                'otakomod_anime_characters:hideri_kanzaki_cloth_chestplate',
                'otakomod_anime_characters:hideri_kanzaki_cloth_leggings',
                'otakomod_anime_characters:kaho_hinata_cloth_boots',
                'otakomod_anime_characters:kaho_hinata_cloth_chestplate',
                'otakomod_anime_characters:kaho_hinata_cloth_leggings',
                'otakomod_anime_characters:king_cloth_boots',
                'otakomod_anime_characters:king_cloth_chestplate',
                'otakomod_anime_characters:king_cloth_leggings',
                'otakomod_anime_characters:mafuyu_hoshikawa_cloth_boots',
                'otakomod_anime_characters:mafuyu_hoshikawa_cloth_chestplate',
                'otakomod_anime_characters:mafuyu_hoshikawa_cloth_leggings',
                'otakomod_anime_characters:maika_sakuranomiya_cloth_boots',
                'otakomod_anime_characters:maika_sakuranomiya_cloth_chestplate',
                'otakomod_anime_characters:maika_sakuranomiya_cloth_leggings',
                'otakomod_anime_characters:meliodas_cloth_boots',
                'otakomod_anime_characters:meliodas_cloth_chestplate',
                'otakomod_anime_characters:meliodas_cloth_leggings',
                'otakomod_anime_characters:miu_amano_cloth_boots',
                'otakomod_anime_characters:miu_amano_cloth_chestplate',
                'otakomod_anime_characters:miu_amano_cloth_leggings',
                'otakomod_anime_characters:sora_chestz_chestplate',
                'otakomod_anime_characters:tatsu_apronz_chestplate'
            ],
            text: [Text.translate('ll8.info.otakomod_anime_characters.kill_named_character')]
        },
        {
            filter: [
                'otakomod_anime_characters:endou_uniform_boots',
                'otakomod_anime_characters:endou_uniform_chestplate',
                'otakomod_anime_characters:endou_uniform_helmet',
                'otakomod_anime_characters:endou_uniform_leggings',
                'otakomod_anime_characters:inazuma_eleven_uniform_boots',
                'otakomod_anime_characters:inazuma_eleven_uniform_chestplate',
                'otakomod_anime_characters:inazuma_eleven_uniform_leggings',
                'otakomod_anime_characters:raimon_uniform_boots',
                'otakomod_anime_characters:raimon_uniform_chestplate',
                'otakomod_anime_characters:raimon_uniform_leggings',
                'otakomod_anime_characters:teikoku_gakuen_goalkeeper_uniform_boots',
                'otakomod_anime_characters:teikoku_gakuen_goalkeeper_uniform_chestplate',
                'otakomod_anime_characters:teikoku_gakuen_goalkeeper_uniform_leggings',
                'otakomod_anime_characters:teikoku_gakuen_uniform_boots',
                'otakomod_anime_characters:teikoku_gakuen_uniform_chestplate',
                'otakomod_anime_characters:teikoku_gakuen_uniform_leggings'
            ],
            text: [Text.translate('ll8.info.otakomod_anime_characters.kill_inazuma_footballer')]
        },
        {
            filter: [
                'otakomod_anime_characters:aqua_staff',
                'otakomod_anime_characters:chastiefol_guardian_form_puff',
                'otakomod_anime_characters:courechouseotkm',
                'otakomod_anime_characters:death_note',
                'otakomod_anime_characters:dragon_handleotkm',
                'otakomod_anime_characters:five_leaf_clover_grimoire',
                'otakomod_anime_characters:four_leaf_clover_grimoire',
                'otakomod_anime_characters:gilthunder_sword',
                'otakomod_anime_characters:herrittotkm',
                'otakomod_anime_characters:megumin_staff',
                'otakomod_anime_characters:mjolnir',
                'otakomod_anime_characters:sakuna_finger',
                'otakomod_anime_characters:sky_piercer',
                'otakomod_anime_characters:smartphone',
                'otakomod_anime_characters:yor_weapon'
            ],
            text: [Text.translate('ll8.info.otakomod_anime_characters.kill_owner_for_signature_item')]
        },
        {
            filter: [
                'otakomod_anime_characters:asta_union_armor_boots',
                'otakomod_anime_characters:asta_union_armor_chestplate',
                'otakomod_anime_characters:asta_union_armor_helmet',
                'otakomod_anime_characters:asta_union_armor_leggings',
                'otakomod_anime_characters:chainsawmanhead_helmet',
                'otakomod_anime_characters:lostvayneotkm',
                'otakomod_anime_characters:rhittaotkm'
            ],
            text: [Text.translate('ll8.info.otakomod_anime_characters.kill_second_form')]
        },
        {
            filter: [
                'otakomod_anime_characters:aldanotkm',
                'otakomod_anime_characters:dragonslayer',
                'otakomod_anime_characters:gideonotkm'
            ],
            text: [Text.translate('ll8.info.otakomod_anime_characters.rare_hand_drop')]
        },
        {
            filter: [
                'otakomod_anime_characters:asta_demon_slayer_sword'
            ],
            text: [Text.translate('ll8.info.otakomod_anime_characters.convert_grimoire')]
        },
        {
            filter: [
                'pastel:colorful_shooting_star',
                'pastel:fiery_shooting_star',
                'pastel:gemstone_shooting_star',
                'pastel:glistering_shooting_star',
                'pastel:pristine_shooting_star'
            ],
            text: [Text.translate('ll8.info.pastel.catch_shooting_star')]
        },
        {
            filter: [
                'pastel:aqua_regia',
                'pastel:jade_wine',
                'pastel:nectered_viognier'
            ],
            text: [Text.translate('ll8.info.pastel.titration_barrel_bulb_wine')]
        },
        {
            filter: [
                'pastel:cheong',
                'pastel:mermaids_jam'
            ],
            text: [Text.translate('ll8.info.pastel.titration_barrel_cheong')]
        },
        {
            filter: [
                'pastel:suspicious_brew'
            ],
            text: [Text.translate('ll8.info.pastel.titration_barrel_suspicious_brew')]
        },
        {
            filter: [
                'pastel:budding_moonstone'
            ],
            text: [Text.translate('ll8.info.pastel.mine_budding_with_resonance')]
        },
        {
            filter: [
                'pastel:fluix_cluster',
                'pastel:large_fluix_bud',
                'pastel:small_fluix_bud'
            ],
            text: [Text.translate('ll8.info.pastel.grow_fluix_in_crystallarieum')]
        },
        {
            filter: [
                'pastel:aether_graced_nectar_gloves'
            ],
            text: [Text.translate('ll8.info.pastel.take_from_manor_item_bowl')]
        },
        {
            filter: [
                'pastel:poisoners_handbook'
            ],
            text: [Text.translate('ll8.info.pastel.take_from_manxi_statue')]
        },
        {
            filter: [
                'pastel:bucket_of_eraser'
            ],
            text: [Text.translate('ll8.info.pastel.bucket_an_eraser')]
        },
        {
            filter: [
                'pastel:mysterious_compass'
            ],
            text: [Text.translate('ll8.info.pastel.socket_and_open_locket')]
        },
        {
            filter: [
                'modern_industrialization:energy_p2p_tunnel'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.attune_ae2_p2p_tunnel')]
        },
        {
            filter: [
                'grotesque_steve:mailbox',
                'grotesque_steve:pc'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.kill_grotesque_steve')]
        },
        {
            filter: [
                'grotesque_steve:barmenshirt',
                'grotesque_steve:brushaqua',
                'grotesque_steve:brushblack',
                'grotesque_steve:brushblue',
                'grotesque_steve:brushbrown',
                'grotesque_steve:brushlime',
                'grotesque_steve:brushorange',
                'grotesque_steve:brushpink',
                'grotesque_steve:brushpurple',
                'grotesque_steve:brushred',
                'grotesque_steve:brushwhite',
                'grotesque_steve:brushyellow',
                'grotesque_steve:corrupteddisc',
                'grotesque_steve:freshbeens',
                'grotesque_steve:grotestuedisc',
                'grotesque_steve:hairlotion',
                'grotesque_steve:herobrineshirt',
                'grotesque_steve:homelandershirt',
                'grotesque_steve:juice',
                'grotesque_steve:pasivedisc',
                'grotesque_steve:santashirt',
                'grotesque_steve:scissors',
                'grotesque_steve:squidshirt',
                'grotesque_steve:wrench'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.open_mailbox')]
        },
        {
            filter: [
                'grotesque_steve:bananatrap'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.buy_from_wandering_trader')]
        },
        {
            filter: [
                'grotesque_steve:protein'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.brew_protein')]
        },
        {
            filter: [
                'grotesque_steve:primedisc',
                'grotesque_steve:scroll'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.kill_grotesque_prime')]
        },
        {
            filter: [
                'grotesque_steve:primestatuebust'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.take_bust_from_prime_statue')]
        },
        {
            filter: [
                'grotesque_steve:pc_coder',
                'grotesque_steve:scrollmessage'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.loot_mansion_containers')]
        },
        {
            filter: [
                'grotesque_steve:mysterybox'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.find_mysterybox')]
        },
        {
            filter: [
                'grotesque_steve:bubblemover',
                'grotesque_steve:magnet'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.open_mysterybox')]
        },
        {
            filter: [
                'grotesque_steve:bbb_bucket'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.fill_bucket_with_bbb')]
        },
        {
            filter: [
                'grotesque_steve:magiccapsulefilled'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.capture_steve_in_capsule')]
        },
        {
            filter: [
                'minecolonies:borscht',
                'minecolonies:eggplant_dolma',
                'minecolonies:fish_dinner',
                'minecolonies:hand_pie',
                'minecolonies:lamb_stew',
                'minecolonies:pita_hummus',
                'minecolonies:ramen',
                'minecolonies:schnitzel',
                'minecolonies:spicy_eggplant',
                'minecolonies:steak_dinner',
                'minecolonies:stew_trencher',
                'minecolonies:stuffed_pepper',
                'minecolonies:stuffed_pita',
                'minecolonies:sushi_roll',
                'minecolonies:tacos'
            ],
            text: [Text.translate('ll8.info.minecolonies.request_from_chef')]
        },
        {
            filter: [
                'minecolonies:chorus_bread',
                'minecolonies:flatbread',
                'minecolonies:golden_bread',
                'minecolonies:lembas_scone',
                'minecolonies:milky_bread',
                'minecolonies:mintchoco_cheesecake',
                'minecolonies:mushroom_pizza',
                'minecolonies:sugary_bread'
            ],
            text: [Text.translate('ll8.info.minecolonies.request_from_baker')]
        },
        {
            filter: [
                'minecolonies:plate_armor_boots',
                'minecolonies:plate_armor_chest',
                'minecolonies:plate_armor_helmet',
                'minecolonies:plate_armor_legs'
            ],
            text: [Text.translate('ll8.info.minecolonies.blacksmith_plate_armor')]
        },
        {
            filter: [
                'minecolonies:assistanthammer_diamond',
                'minecolonies:assistanthammer_iron'
            ],
            text: [Text.translate('ll8.info.minecolonies.blacksmith_assistant_hammer')]
        },
        {
            filter: [
                'minecolonies:sifter_mesh_diamond',
                'minecolonies:sifter_mesh_flint',
                'minecolonies:sifter_mesh_iron',
                'minecolonies:sifter_mesh_string'
            ],
            text: [Text.translate('ll8.info.minecolonies.sifter_mesh_from_crafters')]
        },
        {
            filter: [
                'minecolonies:scroll_area_tp',
                'minecolonies:scroll_guard_help',
                'minecolonies:scroll_highlight',
                'minecolonies:scroll_tp'
            ],
            text: [Text.translate('ll8.info.minecolonies.scrolls_from_enchanter')]
        },
        {
            filter: [
                'minecolonies:magicpotion'
            ],
            text: [Text.translate('ll8.info.minecolonies.magicpotion_from_alchemist')]
        },
        {
            filter: [
                'minecolonies:mistletoe'
            ],
            text: [Text.translate('ll8.info.minecolonies.mistletoe_harvested_by_alchemist')]
        },
        {
            filter: [
                'minecolonies:scepterbeekeeper',
                'minecolonies:scepterguard',
                'minecolonies:scepterlumberjack'
            ],
            text: [Text.translate('ll8.info.minecolonies.hut_gui_obtain_tool_button')]
        },
        {
            filter: [
                'minecolonies:scepterpermission'
            ],
            text: [Text.translate('ll8.info.minecolonies.townhall_permissions_button')]
        },
        {
            filter: [
                'avaritia_integration:elderly_medulla_bucket',
                'avaritia_integration:void_matter_bucket'
            ],
            text: [Text.translate('ll8.info.avaritia_integration.laser_drill_fluid_then_bucket')]
        },
        {
            filter: [
                'alexscaves:cave_codex'
            ],
            text: [Text.translate('ll8.info.alexscaves.spelunkery_table_translate')]
        },
        {
            filter: [
                'alexscaves:cave_map'
            ],
            text: [Text.translate('ll8.info.alexscaves.craft_cave_map')]
        },
        {
            filter: [
                'alexscaves:gossamer_worm_bucket',
                'alexscaves:lanternfish_bucket',
                'alexscaves:sea_pig_bucket',
                'alexscaves:trilocaris_bucket',
                'alexscaves:tripodfish_bucket'
            ],
            text: [Text.translate('ll8.info.alexscaves.bucket_water_mob')]
        },
        {
            filter: [
                'alexscaves:radgill_bucket'
            ],
            text: [Text.translate('ll8.info.alexscaves.bucket_acid_radgill')]
        },
        {
            filter: [
                'alexscaves:sweetish_fish_blue_bucket',
                'alexscaves:sweetish_fish_green_bucket',
                'alexscaves:sweetish_fish_pink_bucket',
                'alexscaves:sweetish_fish_red_bucket',
                'alexscaves:sweetish_fish_yellow_bucket'
            ],
            text: [Text.translate('ll8.info.alexscaves.bucket_soda_sweetish_fish')]
        },
        {
            filter: [
                'alexscaves:purple_soda_bucket'
            ],
            text: [Text.translate('ll8.info.alexscaves.fill_bucket_purple_soda')]
        },
        {
            filter: [
                'alexscaves:gingerbread_boots',
                'alexscaves:gingerbread_chestplate',
                'alexscaves:gingerbread_helmet',
                'alexscaves:gingerbread_leggings'
            ],
            text: [Text.translate('ll8.info.alexscaves.gingerbarrel_assembly')]
        },
        {
            filter: [
                'alexscaves:jelly_bean'
            ],
            text: [Text.translate('ll8.info.alexscaves.gummy_bear_licoroot')]
        },
        {
            filter: [
                'mahoutsukai:scroll_ascension',
                'mahoutsukai:scroll_black_flame',
                'mahoutsukai:scroll_borrowed_authority',
                'mahoutsukai:scroll_boundary_alarm',
                'mahoutsukai:scroll_boundary_displacement',
                'mahoutsukai:scroll_boundary_drain_life',
                'mahoutsukai:scroll_boundary_gravity',
                'mahoutsukai:scroll_boundary_raise_enclosure',
                'mahoutsukai:scroll_boundary_tangible',
                'mahoutsukai:scroll_butterfly_effect',
                'mahoutsukai:scroll_cup_of_heaven',
                'mahoutsukai:scroll_damage_exchange',
                'mahoutsukai:scroll_damage_replication',
                'mahoutsukai:scroll_death_collection',
                'mahoutsukai:scroll_fallen_down',
                'mahoutsukai:scroll_familiars_garden',
                'mahoutsukai:scroll_fay_sight',
                'mahoutsukai:scroll_gandr',
                'mahoutsukai:scroll_geas',
                'mahoutsukai:scroll_immunity_exchange',
                'mahoutsukai:scroll_insight',
                'mahoutsukai:scroll_mental_displacement',
                'mahoutsukai:scroll_mystic_eyes',
                'mahoutsukai:scroll_mystic_staff',
                'mahoutsukai:scroll_possess_entity',
                'mahoutsukai:scroll_prediction',
                'mahoutsukai:scroll_presence_concealment',
                'mahoutsukai:scroll_probability_alter',
                'mahoutsukai:scroll_projectile_displacement',
                'mahoutsukai:scroll_projection',
                'mahoutsukai:scroll_protective_displacement',
                'mahoutsukai:scroll_proximity_projection',
                'mahoutsukai:scroll_reality_marble',
                'mahoutsukai:scroll_recall_familiar',
                'mahoutsukai:scroll_retribution',
                'mahoutsukai:scroll_reversion_eyes',
                'mahoutsukai:scroll_rho_aias',
                'mahoutsukai:scroll_selective_displacement',
                'mahoutsukai:scroll_spatial_disorientation',
                'mahoutsukai:scroll_strengthening',
                'mahoutsukai:scroll_summon_familiar',
                'mahoutsukai:scroll_swap_familiar',
                'mahoutsukai:scroll_treasury_projection',
                'mahoutsukai:scroll_weapon_shooter'
            ],
            text: [Text.translate('ll8.info.mahoutsukai.blood_circle_on_cloth')]
        },
        {
            filter: [
                'mahoutsukai:mystic_staff',
                'mahoutsukai:rule_breaker',
                'mahoutsukai:spatial_disorientation_staff',
                'mahoutsukai:treasury_projection_gauntlet',
                'mahoutsukai:weapon_projectile_bow'
            ],
            text: [Text.translate('ll8.info.mahoutsukai.use_scroll_to_summon_weapon')]
        },
        {
            filter: [
                'mahoutsukai:caliburn'
            ],
            text: [Text.translate('ll8.info.mahoutsukai.throw_sword_in_lake')]
        },
        {
            filter: [
                'mahoutsukai:murky_bucket'
            ],
            text: [Text.translate('ll8.info.mahoutsukai.bucket_the_lake')]
        },
        {
            filter: [
                'mahoutsukai:morgan'
            ],
            text: [Text.translate('ll8.info.mahoutsukai.kill_pet_with_caliburn')]
        },
        {
            filter: [
                'mahoutsukai:clarent'
            ],
            text: [Text.translate('ll8.info.mahoutsukai.strengthened_sword_in_dragon_breath')]
        },
        {
            filter: [
                'mahoutsukai:staff_emrys'
            ],
            text: [Text.translate('ll8.info.mahoutsukai.lightning_on_strengthened_stick')]
        },
        {
            filter: [
                'mahoutsukai:nobu'
            ],
            text: [Text.translate('ll8.info.mahoutsukai.longshot_with_strengthened_bow')]
        },
        {
            filter: [
                'mahoutsukai:replica'
            ],
            text: [Text.translate('ll8.info.mahoutsukai.block_with_strengthened_shield')]
        },
        {
            filter: [
                'mahoutsukai:william'
            ],
            text: [Text.translate('ll8.info.mahoutsukai.strengthened_book_on_lectern')]
        },
        {
            filter: [
                'quark:crab_bucket'
            ],
            text: [Text.translate('ll8.info.quark.bucket_the_crab')]
        },
        {
            filter: [
                'quark:music_disc_chatter',
                'quark:music_disc_drips',
                'quark:music_disc_rain'
            ],
            text: [Text.translate('ll8.info.quark.spider_killed_by_skeleton')]
        },
        {
            filter: [
                'quark:music_disc_endermosh'
            ],
            text: [Text.translate('ll8.info.quark.end_city_treasure')]
        },
        {
            filter: [
                'quark:egg_parrot_gray'
            ],
            text: [Text.translate('ll8.info.quark.parrot_lays_egg')]
        },
        {
            filter: [
                'eternal_starlight:luminaris_bucket',
                'eternal_starlight:luminofish_bucket',
                'eternal_starlight:rookfish_bucket'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.bucket_the_fish')]
        },
        {
            filter: [
                'eternal_starlight:ether_bucket'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.fill_bucket_with_ether')]
        },
        {
            filter: [
                'eternal_starlight:music_disc_ether_rain',
                'eternal_starlight:music_disc_spirit'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.throw_disc_into_ether')]
        },
        {
            filter: [
                'eternal_starlight:butterfly_wings_amulet'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.throw_accessory_into_ether')]
        },
        {
            filter: [
                'eternal_starlight:music_disc_brisk'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.drown_a_rookfish')]
        },
        {
            filter: [
                'eternal_starlight:music_disc_sacred_desert'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.moth_kills_gleech')]
        },
        {
            filter: [
                'eternal_starlight:aurora_deer_antler'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.ram_deer_into_log')]
        },
        {
            filter: [
                'eternal_starlight:blossom_of_stars'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.break_leaves_in_starlight')]
        },
        {
            filter: [
                'eternal_starlight:shattered_sword_blade'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.throw_shattered_blade')]
        },
        {
            filter: [
                'eternal_starlight:starlight_silver_coin'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.trade_with_boarwarf_silversmith')]
        },
        {
            filter: [
                'eternal_starlight:loot_bag'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.boss_dies_without_you')]
        },
        {
            filter: [
                'eternal_starlight:molten_stellagmite',
                'eternal_starlight:molten_stellagmite_slab',
                'eternal_starlight:molten_stellagmite_stairs',
                'eternal_starlight:molten_stellagmite_wall'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.ignite_stellagmite')]
        },
        {
            filter: [
                'eternal_starlight:nightfall_dirt_path',
                'eternal_starlight:nightfall_farmland'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.till_or_flatten_nightfall_dirt')]
        },
        {
            filter: [
                'sushigocrafting:avocado_maki',
                'sushigocrafting:crab_maki',
                'sushigocrafting:cucumber_maki',
                'sushigocrafting:salmon_maki',
                'sushigocrafting:tuna_maki'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.roll_maki')]
        },
        {
            filter: [
                'sushigocrafting:crab_california',
                'sushigocrafting:crab_cheese_california',
                'sushigocrafting:crab_cucumber_california',
                'sushigocrafting:salmon_california',
                'sushigocrafting:salmon_cheese_california',
                'sushigocrafting:salmon_cucumber_california',
                'sushigocrafting:tobiko_crab_california',
                'sushigocrafting:tobiko_crab_cheese_california',
                'sushigocrafting:tobiko_crab_cucumber_california',
                'sushigocrafting:tobiko_salmon_california',
                'sushigocrafting:tobiko_salmon_cheese_california',
                'sushigocrafting:tobiko_salmon_cucumber_california',
                'sushigocrafting:tobiko_tuna_california',
                'sushigocrafting:tobiko_tuna_cheese_california',
                'sushigocrafting:tobiko_tuna_cucumber_california',
                'sushigocrafting:tuna_california',
                'sushigocrafting:tuna_cheese_california',
                'sushigocrafting:tuna_cucumber_california'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.roll_california')]
        },
        {
            filter: [
                'sushigocrafting:salmon_nigiri',
                'sushigocrafting:shrimp_nigiri',
                'sushigocrafting:tuna_nigiri'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.roll_nigiri')]
        },
        {
            filter: [
                'sushigocrafting:salmon_gunkan',
                'sushigocrafting:tuna_gunkan',
                'sushigocrafting:wakame_gunkan'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.roll_gunkan')]
        },
        {
            filter: [
                'sushigocrafting:chicken_temaki',
                'sushigocrafting:salmon_temaki',
                'sushigocrafting:shrimp_temaki',
                'sushigocrafting:tuna_temaki'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.roll_temaki')]
        },
        {
            filter: [
                'sushigocrafting:onigiri'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.roll_onigiri')]
        },
        {
            filter: [
                'sushigocrafting:avocado_slices',
                'sushigocrafting:cucumber_slices',
                'sushigocrafting:imitation_crab',
                'sushigocrafting:salmon_fillet',
                'sushigocrafting:tuna_fillet',
                'sushigocrafting:wasabi_paste'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.chop_on_cutting_board')]
        },
        {
            filter: [
                'sushigocrafting:cooked_rice'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.cook_in_rice_cooker')]
        },
        {
            filter: [
                'sushigocrafting:nori_sheets'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.piston_press_dried_kelp')]
        },
        {
            filter: [
                'sushigocrafting:avocado'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.pick_ripe_avocado_leaves')]
        },
        {
            filter: [
                'sushigocrafting:tobiko'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.kill_any_fish')]
        },
        {
            filter: [
                'sushigocrafting:shrimp_bucket',
                'sushigocrafting:tuna_bucket'
            ],
            text: [Text.translate('ll8.info.sushigocrafting.scoop_fish_with_bucket')]
        },
        {
            filter: [
                'productivemetalworks:meat_bucket'
            ],
            text: [Text.translate('ll8.info.productivemetalworks.fill_bucket_with_liquid_meat')]
        },
        {
            filter: [
                'ic2cre:biomass_bucket',
                'ic2cre:construction_foam_bucket',
                'ic2cre:coolant_bucket',
                'ic2cre:creosote_bucket',
                'ic2cre:uu_matter_bucket'
            ],
            text: [Text.translate('ll8.info.ic2cre.fill_bucket_in_fluid_canner')]
        },
        {
            filter: [
                'ic2cre:distilled_water_bucket'
            ],
            text: [Text.translate('ll8.info.ic2cre.solar_distiller_output_slot')]
        },
        {
            filter: [
                'ic2cre:hot_water_bucket',
                'ic2cre:pahoehoe_lava_bucket'
            ],
            text: [Text.translate('ll8.info.ic2cre.liquid_heat_exchanger_cold_side')]
        },
        {
            filter: [
                'ic2cre:hot_coolant_bucket'
            ],
            text: [Text.translate('ll8.info.ic2cre.reactor_hot_coolant_slot')]
        },
        {
            filter: [
                'ic2cre:coke'
            ],
            text: [Text.translate('ll8.info.ic2cre.bake_coal_in_coke_kiln')]
        },
        {
            filter: [
                'ic2cre:ashes'
            ],
            text: [Text.translate('ll8.info.ic2cre.ash_from_solid_fuel_firebox')]
        },
        {
            filter: [
                'ic2cre:hops',
                'ic2cre:milk_wart',
                'ic2cre:oil_berry',
                'ic2cre:terra_wart'
            ],
            text: [Text.translate('ll8.info.ic2cre.harvest_crossbred_crop')]
        },
        {
            filter: [
                'ic2cre:crop_seed'
            ],
            text: [Text.translate('ll8.info.ic2cre.break_crop_for_seed_bag')]
        },
        {
            filter: [
                'ic2cre:booze_mug'
            ],
            text: [Text.translate('ll8.info.ic2cre.tap_booze_barrel_with_mug')]
        },
        {
            filter: [
                'supplementaries:present_black',
                'supplementaries:present_blue',
                'supplementaries:present_brown',
                'supplementaries:present_cyan',
                'supplementaries:present_gray',
                'supplementaries:present_green',
                'supplementaries:present_light_blue',
                'supplementaries:present_light_gray',
                'supplementaries:present_lime',
                'supplementaries:present_magenta',
                'supplementaries:present_orange',
                'supplementaries:present_pink',
                'supplementaries:present_purple',
                'supplementaries:present_red',
                'supplementaries:present_white',
                'supplementaries:present_yellow'
            ],
            text: [Text.translate('ll8.info.supplementaries.dye_present')]
        },
        {
            filter: [
                'supplementaries:trapped_present_black',
                'supplementaries:trapped_present_blue',
                'supplementaries:trapped_present_brown',
                'supplementaries:trapped_present_cyan',
                'supplementaries:trapped_present_gray',
                'supplementaries:trapped_present_green',
                'supplementaries:trapped_present_light_blue',
                'supplementaries:trapped_present_light_gray',
                'supplementaries:trapped_present_lime',
                'supplementaries:trapped_present_magenta',
                'supplementaries:trapped_present_orange',
                'supplementaries:trapped_present_pink',
                'supplementaries:trapped_present_purple',
                'supplementaries:trapped_present_red',
                'supplementaries:trapped_present_white',
                'supplementaries:trapped_present_yellow'
            ],
            text: [Text.translate('ll8.info.supplementaries.dye_trapped_present')]
        },
        {
            filter: [
                'supplementaries:cartographers_quill'
            ],
            text: [Text.translate('ll8.info.supplementaries.cartographer_trade')]
        },
        {
            filter: [
                'supplementaries:music_disc_heave_ho'
            ],
            text: [Text.translate('ll8.info.supplementaries.cannonball_creeper')]
        },
        {
            filter: [
                'supplementaries:tater_in_a_jar'
            ],
            text: [Text.translate('ll8.info.supplementaries.jar_on_tiny_potato')]
        },
        {
            filter: [
                'deep_aether:floaty_scarf',
                'deep_aether:slider_eye'
            ],
            text: [Text.translate('ll8.info.deep_aether.flawless_boss_drop')]
        },
        {
            filter: [
                'deep_aether:spooky_ring'
            ],
            text: [Text.translate('ll8.info.deep_aether.halloween_slider_drop')]
        },
        {
            filter: [
                'deep_aether:music_disc_atta',
                'deep_aether:music_disc_faent',
                'deep_aether:music_disc_himininn'
            ],
            text: [Text.translate('ll8.info.deep_aether.dungeon_reward_chest_disc')]
        },
        {
            filter: [
                'deep_aether:music_disc_above_the_rain'
            ],
            text: [Text.translate('ll8.info.deep_aether.fish_in_aether')]
        },
        {
            filter: [
                'deep_aether:aerglow_fish_bucket',
                'deep_aether:skyroot_aerglow_fish_bucket'
            ],
            text: [Text.translate('ll8.info.deep_aether.bucket_aerglow_fish')]
        },
        {
            filter: [
                'deep_aether:skyroot_virulent_quicksand_bucket',
                'deep_aether:virulent_quicksand_bucket'
            ],
            text: [Text.translate('ll8.info.deep_aether.bucket_quicksand')]
        },
        {
            filter: [
                'deep_aether:aerwhale_saddle'
            ],
            text: [Text.translate('ll8.info.deep_aether.craft_aerwhale_saddle')]
        },
        {
            filter: [
                'deep_aether:golden_heights_dirt_path'
            ],
            text: [Text.translate('ll8.info.deep_aether.shovel_golden_grass')]
        },
        {
            filter: [
                'aether:skyroot_powder_snow_bucket',
                'aether:skyroot_water_bucket'
            ],
            text: [Text.translate('ll8.info.aether.fill_skyroot_bucket')]
        },
        {
            filter: [
                'aether:skyroot_axolotl_bucket',
                'aether:skyroot_cod_bucket',
                'aether:skyroot_pufferfish_bucket',
                'aether:skyroot_salmon_bucket',
                'aether:skyroot_tadpole_bucket',
                'aether:skyroot_tropical_fish_bucket'
            ],
            text: [Text.translate('ll8.info.aether.scoop_mob_with_skyroot_bucket')]
        },
        {
            filter: [
                'aether:candy_cane'
            ],
            text: [Text.translate('ll8.info.aether.halloween_kill_in_aether')]
        },
        {
            filter: [
                'aether:candy_cane'
            ],
            text: [Text.translate('ll8.info.aether.bee_queen_christmas_trade')]
        },
        {
            filter: [
                'aether:obsidian_gloves'
            ],
            text: [Text.translate('ll8.info.aether.ftb_quest_obsidian_set')]
        },
        {
            filter: [
                'cobblemon:electric_seed',
                'cobblemon:float_stone',
                'cobblemon:grassy_seed',
                'cobblemon:grip_claw',
                'cobblemon:lagging_tail',
                'cobblemon:light_ball',
                'cobblemon:lucky_egg',
                'cobblemon:metal_powder',
                'cobblemon:misty_seed',
                'cobblemon:oval_stone',
                'cobblemon:psychic_seed',
                'cobblemon:quick_claw',
                'cobblemon:quick_powder',
                'cobblemon:sharp_beak',
                'cobblemon:shed_shell',
                'cobblemon:sticky_barb'
            ],
            text: [Text.translate('ll8.info.cobblemon.drop_from_defeated_pokemon')]
        },
        {
            filter: [
                'cobblemon:leftovers'
            ],
            text: [Text.translate('ll8.info.cobblemon.snorlax_drop_or_eat_an_apple')]
        },
        {
            filter: [
                'cobblemon:shell_helmet'
            ],
            text: [Text.translate('ll8.info.cobblemon.evolve_shelmet_with_link_cable')]
        },
        {
            filter: [
                'cobblemon:saccharine_log_slathered'
            ],
            text: [Text.translate('ll8.info.cobblemon.slather_saccharine_log_with_honey')]
        },
        {
            filter: [
                'synergy:liquid_glass_bucket',
                'synergy:molten_aluminum_bucket',
                'synergy:molten_ancient_debris_bucket',
                'synergy:molten_blaze_bucket',
                'synergy:molten_bronze_bucket',
                'synergy:molten_copper_bucket',
                'synergy:molten_gold_bucket',
                'synergy:molten_iridium_bucket',
                'synergy:molten_iron_bucket',
                'synergy:molten_lead_bucket',
                'synergy:molten_nickel_bucket',
                'synergy:molten_osmium_bucket',
                'synergy:molten_platinum_bucket',
                'synergy:molten_silver_bucket',
                'synergy:molten_steel_bucket',
                'synergy:molten_tin_bucket',
                'synergy:molten_uranium_bucket'
            ],
            text: [Text.translate('ll8.info.synergy.bucket_from_foundry_or_melter')]
        },
        {
            filter: [
                'synergy:honey_bucket'
            ],
            text: [Text.translate('ll8.info.synergy.honey_from_crushing_tub')]
        },
        {
            filter: [
                'synergy:ironberry_juice_bucket',
                'synergy:rubber_bucket'
            ],
            text: [Text.translate('ll8.info.synergy.extractor_press')]
        },
        {
            filter: [
                'synergy:sulfuric_acid_bucket'
            ],
            text: [Text.translate('ll8.info.synergy.sulfuric_acid_from_melter')]
        },
        {
            filter: [
                'synergy:steam_bucket'
            ],
            text: [Text.translate('ll8.info.synergy.steam_via_fluid_tank')]
        },
        {
            filter: [
                'doggytalents:frisbee_wet'
            ],
            text: [Text.translate('ll8.info.doggytalents.dog_fetch_returns_wet')]
        },
        {
            filter: [
                'doggytalents:disc_chopin_op64_no1'
            ],
            text: [Text.translate('ll8.info.doggytalents.dog_wearing_wig_kills')]
        },
        {
            filter: [
                'doggytalents:easter_egg_candy'
            ],
            text: [Text.translate('ll8.info.doggytalents.dog_wearing_bunny_ears_kills')]
        },
        {
            filter: [
                'doggytalents:edamame_unpodded'
            ],
            text: [Text.translate('ll8.info.doggytalents.unpod_edamame')]
        },
        {
            filter: [
                'doggytalents:drool_scent_treat'
            ],
            text: [Text.translate('ll8.info.doggytalents.sniffer_dog_returns_treat')]
        },
        {
            filter: [
                'industrialforegoing:biofuel_bucket',
                'industrialforegoing:essence_bucket',
                'industrialforegoing:latex_bucket',
                'industrialforegoing:pink_slime_bucket',
                'industrialforegoing:sewage_bucket',
                'industrialforegoing:sludge_bucket'
            ],
            text: [Text.translate('ll8.info.industrialforegoing.fill_bucket_at_machine_tank')]
        },
        {
            filter: [
                'industrialforegoing:fermented_ore_meat_bucket',
                'industrialforegoing:raw_ore_meat_bucket'
            ],
            text: [Text.translate('ll8.info.industrialforegoing.ore_meat_chain')]
        },
        {
            filter: [
                'irons_spellbooks:archevoker_logbook_untranslated',
                'irons_spellbooks:unchained_book'
            ],
            text: [Text.translate('ll8.info.irons_spellbooks.take_lectern_book')]
        },
        {
            filter: [
                'irons_spellbooks:archevoker_logbook_translated'
            ],
            text: [Text.translate('ll8.info.irons_spellbooks.trade_fort_magician')]
        },
        {
            filter: [
                'irons_spellbooks:villager_spell_book'
            ],
            text: [Text.translate('ll8.info.irons_spellbooks.trade_priest_or_fort_villager')]
        },
        {
            filter: [
                'irons_spellbooks:hither_thither_wand'
            ],
            text: [Text.translate('ll8.info.irons_spellbooks.trade_wandering_trader_rare')]
        },
        {
            filter: [
                'irons_spellbooks:music_disc_whispers_of_ice'
            ],
            text: [Text.translate('ll8.info.irons_spellbooks.trade_cryomancer')]
        },
        {
            filter: [
                'irons_spellbooks:magehunter'
            ],
            text: [Text.translate('ll8.info.irons_spellbooks.kill_magehunter_vindicator')]
        },
        {
            filter: [
                'irons_spellbooks:tarnished_helmet'
            ],
            text: [Text.translate('ll8.info.irons_spellbooks.kill_necromancer')]
        },
        {
            filter: [
                'irons_spellbooks:lightning_rod'
            ],
            text: [Text.translate('ll8.info.irons_spellbooks.energized_core_on_lightning_rod')]
        },
        {
            filter: [
                'netherman:altar_compass_key'
            ],
            text: [Text.translate('ll8.info.netherman.break_nether_seal')]
        },
        {
            filter: [
                'netherman:azazel_guide_book'
            ],
            text: [Text.translate('ll8.info.netherman.trade_believer_villager')]
        },
        {
            filter: [
                'netherman:azazel_scythe'
            ],
            text: [Text.translate('ll8.info.netherman.transform_azazel_spear')]
        },
        {
            filter: [
                'netherman:maze_key'
            ],
            text: [Text.translate('ll8.info.netherman.solve_maze_puzzle')]
        },
        {
            filter: [
                'netherman:quota'
            ],
            text: [Text.translate('ll8.info.netherman.surrender_to_azazel')]
        },
        {
            filter: [
                'georenouveau:aluminum_geore_golem_charm',
                'georenouveau:ancient_debris_geore_golem_charm',
                'georenouveau:black_quartz_geore_golem_charm',
                'georenouveau:coal_geore_golem_charm',
                'georenouveau:copper_geore_golem_charm',
                'georenouveau:diamond_geore_golem_charm',
                'georenouveau:emerald_geore_golem_charm',
                'georenouveau:iron_geore_golem_charm',
                'georenouveau:lapis_geore_golem_charm',
                'georenouveau:lead_geore_golem_charm',
                'georenouveau:monazite_geore_golem_charm',
                'georenouveau:nickel_geore_golem_charm',
                'georenouveau:osmium_geore_golem_charm',
                'georenouveau:platinum_geore_golem_charm',
                'georenouveau:quartz_geore_golem_charm',
                'georenouveau:redstone_geore_golem_charm',
                'georenouveau:ruby_geore_golem_charm',
                'georenouveau:sapphire_geore_golem_charm',
                'georenouveau:silver_geore_golem_charm',
                'georenouveau:tin_geore_golem_charm',
                'georenouveau:topaz_geore_golem_charm',
                'georenouveau:tungsten_geore_golem_charm',
                'georenouveau:uraninite_geore_golem_charm',
                'georenouveau:uranium_geore_golem_charm',
                'georenouveau:zinc_geore_golem_charm'
            ],
            text: [Text.translate('ll8.info.georenouveau.awaken_budding_geore')]
        },
        {
            filter: [
                'tropicraft:ashen_mask_enigma',
                'tropicraft:ashen_mask_invader',
                'tropicraft:ashen_mask_mojo',
                'tropicraft:ashen_mask_the_heart',
                'tropicraft:ashen_mask_warthog'
            ],
            text: [Text.translate('ll8.info.tropicraft.knock_mask_off_ashen')]
        },
        {
            filter: [
                'tropicraft:black_pearl',
                'tropicraft:frox_conch',
                'tropicraft:love_tropics_shell',
                'tropicraft:pab_shell',
                'tropicraft:rube_nautilus',
                'tropicraft:solonox_shell',
                'tropicraft:white_pearl'
            ],
            text: [Text.translate('ll8.info.tropicraft.sift_sand_in_sifter')]
        },
        {
            filter: [
                'tropicraft:tropical_fish_bucket'
            ],
            text: [Text.translate('ll8.info.tropicraft.bucket_tropical_fish')]
        },
        {
            filter: [
                'reliquified_irons_spells_and_spellbooks:bloody_voodoo_doll',
                'reliquified_irons_spells_and_spellbooks:cardiac_trap',
                'reliquified_irons_spells_and_spellbooks:cloak_of_the_bloody_feather',
                'reliquified_irons_spells_and_spellbooks:dimension_key',
                'reliquified_irons_spells_and_spellbooks:dragon_blood_vial',
                'reliquified_irons_spells_and_spellbooks:echo_glove',
                'reliquified_irons_spells_and_spellbooks:ender_bow',
                'reliquified_irons_spells_and_spellbooks:flask_of_the_red_mist',
                'reliquified_irons_spells_and_spellbooks:galaxy_devourer_diadem',
                'reliquified_irons_spells_and_spellbooks:immaterial_disperser',
                'reliquified_irons_spells_and_spellbooks:living_flesh',
                'reliquified_irons_spells_and_spellbooks:lunar_sextant',
                'reliquified_irons_spells_and_spellbooks:mask_of_hunger',
                'reliquified_irons_spells_and_spellbooks:mirror_of_transgression',
                'reliquified_irons_spells_and_spellbooks:pulsar_mantle',
                'reliquified_irons_spells_and_spellbooks:ring_of_blades',
                'reliquified_irons_spells_and_spellbooks:ring_of_elusiveness',
                'reliquified_irons_spells_and_spellbooks:sealed_claymore',
                'reliquified_irons_spells_and_spellbooks:sealed_rapier',
                'reliquified_irons_spells_and_spellbooks:sealed_sword',
                'reliquified_irons_spells_and_spellbooks:shadow_claws',
                'reliquified_irons_spells_and_spellbooks:sinner_crown',
                'reliquified_irons_spells_and_spellbooks:slicer'
            ],
            text: [Text.translate('ll8.info.reliquified_irons_spells_and_spellbooks.loot_isas_structure_chest')]
        },
        {
            filter: [
                'reliquified_irons_spells_and_spellbooks:bloody_voodoo_doll',
                'reliquified_irons_spells_and_spellbooks:cardiac_trap',
                'reliquified_irons_spells_and_spellbooks:cloak_of_the_bloody_feather',
                'reliquified_irons_spells_and_spellbooks:dimension_key',
                'reliquified_irons_spells_and_spellbooks:dragon_blood_vial',
                'reliquified_irons_spells_and_spellbooks:echo_glove',
                'reliquified_irons_spells_and_spellbooks:ender_bow',
                'reliquified_irons_spells_and_spellbooks:flask_of_the_red_mist',
                'reliquified_irons_spells_and_spellbooks:galaxy_devourer_diadem',
                'reliquified_irons_spells_and_spellbooks:immaterial_disperser',
                'reliquified_irons_spells_and_spellbooks:living_flesh',
                'reliquified_irons_spells_and_spellbooks:lunar_sextant',
                'reliquified_irons_spells_and_spellbooks:mask_of_hunger',
                'reliquified_irons_spells_and_spellbooks:mirror_of_transgression',
                'reliquified_irons_spells_and_spellbooks:pulsar_mantle',
                'reliquified_irons_spells_and_spellbooks:ring_of_blades',
                'reliquified_irons_spells_and_spellbooks:ring_of_elusiveness',
                'reliquified_irons_spells_and_spellbooks:sealed_claymore',
                'reliquified_irons_spells_and_spellbooks:sealed_rapier',
                'reliquified_irons_spells_and_spellbooks:sealed_sword',
                'reliquified_irons_spells_and_spellbooks:shadow_claws',
                'reliquified_irons_spells_and_spellbooks:sinner_crown',
                'reliquified_irons_spells_and_spellbooks:slicer'
            ],
            text: [Text.translate('ll8.info.reliquified_irons_spells_and_spellbooks.mimic_reroll')]
        },
        {
            filter: [
                'twilightforest:creeper_skull_candle',
                'twilightforest:piglin_skull_candle',
                'twilightforest:player_skull_candle',
                'twilightforest:skeleton_skull_candle',
                'twilightforest:wither_skeleton_skull_candle',
                'twilightforest:zombie_skull_candle'
            ],
            text: [Text.translate('ll8.info.twilightforest.silk_touch_skull_candle')]
        },
        {
            filter: [
                'twilightforest:filled_magic_map',
                'twilightforest:filled_maze_map',
                'twilightforest:filled_ore_map'
            ],
            text: [Text.translate('ll8.info.twilightforest.use_blank_map')]
        },
        {
            filter: [
                'chickens:chicken'
            ],
            text: [Text.translate('ll8.info.chickens.catch_with_catcher')]
        },
        {
            filter: [
                'chickens:robot_chicken',
                'chickens:robot_rooster'
            ],
            text: [Text.translate('ll8.info.chickens.robot_upgrade_and_virus')]
        },
        {
            filter: [
                'chickens:aviator_skin_crate',
                'chickens:bigbrain_skin_crate',
                'chickens:creeper_skin_crate',
                'chickens:deepdark_skin_crate',
                'chickens:dodo_skin_crate',
                'chickens:duck_skin_crate',
                'chickens:fox_skin_crate',
                'chickens:pink_skin_crate',
                'chickens:rambo_skin_crate',
                'chickens:reptar_skin_crate',
                'chickens:toxic_skin_crate',
                'chickens:valentines_skin_crate',
                'chickens:zombie_skin_crate'
            ],
            text: [Text.translate('ll8.info.chickens.boss_drop_skin_crate')]
        },
        {
            filter: [
                'chickens:mega_chicken'
            ],
            text: [Text.translate('ll8.info.chickens.tame_then_catch_mega_chicken')]
        },
        {
            filter: [
                'chickens:liquid_egg'
            ],
            text: [Text.translate('ll8.info.chickens.fluid_chicken_lays_egg')]
        },
        {
            filter: [
                'chickens:chemical_egg'
            ],
            text: [Text.translate('ll8.info.chickens.chemical_chicken_lays_egg')]
        },
        {
            filter: [
                'chickens:lava_chicken'
            ],
            text: [Text.translate('ll8.info.chickens.chicken_dies_in_lava')]
        },
        {
            filter: [
                'chickens:spawn_egg'
            ],
            text: [Text.translate('ll8.info.chickens.douse_chicken_for_spawn_egg')]
        },
        {
            filter: [
                'iceandfire:pixie_jar_0',
                'iceandfire:pixie_jar_1',
                'iceandfire:pixie_jar_2',
                'iceandfire:pixie_jar_3',
                'iceandfire:pixie_jar_4'
            ],
            text: [Text.translate('ll8.info.iceandfire.catch_pixie_in_jar')]
        },
        {
            filter: [
                'iceandfire:troll_weapon_axe',
                'iceandfire:troll_weapon_column',
                'iceandfire:troll_weapon_column_forest',
                'iceandfire:troll_weapon_column_frost',
                'iceandfire:troll_weapon_hammer',
                'iceandfire:troll_weapon_trunk',
                'iceandfire:troll_weapon_trunk_frost'
            ],
            text: [Text.translate('ll8.info.iceandfire.kill_troll_for_weapon')]
        },
        {
            filter: [
                'iceandfire:dragon_horn_fire',
                'iceandfire:dragon_horn_ice'
            ],
            text: [Text.translate('ll8.info.iceandfire.capture_dragon_with_horn')]
        },
        {
            filter: [
                'iceandfire:stone_statue'
            ],
            text: [Text.translate('ll8.info.iceandfire.silk_touch_stone_statue')]
        },
        {
            filter: [
                'sgearmetalworks:molten_alexandrite_bucket',
                'sgearmetalworks:molten_ammolite_bucket',
                'sgearmetalworks:molten_black_diamond_bucket',
                'sgearmetalworks:molten_carnelian_bucket',
                'sgearmetalworks:molten_citrine_bucket',
                'sgearmetalworks:molten_heliodor_bucket',
                'sgearmetalworks:molten_iolite_bucket',
                'sgearmetalworks:molten_kyanite_bucket',
                'sgearmetalworks:molten_moldavite_bucket',
                'sgearmetalworks:molten_peridot_bucket',
                'sgearmetalworks:molten_rose_quartz_bucket',
                'sgearmetalworks:molten_ruby_bucket',
                'sgearmetalworks:molten_sapphire_bucket',
                'sgearmetalworks:molten_topaz_bucket',
                'sgearmetalworks:molten_turquoise_bucket',
                'sgearmetalworks:molten_white_diamond_bucket'
            ],
            text: [Text.translate('ll8.info.sgearmetalworks.fill_bucket_from_foundry_gem')]
        },
        {
            filter: [
                'sgearmetalworks:molten_azure_electrum_bucket',
                'sgearmetalworks:molten_azure_silver_bucket',
                'sgearmetalworks:molten_blaze_gold_bucket',
                'sgearmetalworks:molten_crimson_iron_bucket',
                'sgearmetalworks:molten_crimson_steel_bucket',
                'sgearmetalworks:molten_tyrian_steel_bucket'
            ],
            text: [Text.translate('ll8.info.sgearmetalworks.fill_bucket_from_foundry_metal')]
        },
        {
            filter: [
                'sgearmetalworks:molten_uru_metal_bucket'
            ],
            text: [Text.translate('ll8.info.sgearmetalworks.fill_bucket_from_hot_foundry_uru')]
        },
        {
            filter: [
                'occultism:crushed_blackstone',
                'occultism:crushed_calcite',
                'occultism:netherite_scrap_dust'
            ],
            text: [Text.translate('ll8.info.occultism.crush_with_foliot_crusher')]
        },
        {
            filter: [
                'occultism:amethyst_dust',
                'occultism:emerald_dust',
                'occultism:lapis_dust'
            ],
            text: [Text.translate('ll8.info.occultism.crush_shared_dust_tag')]
        },
        {
            filter: [
                'occultism:crushed_blue_ice',
                'occultism:crushed_ice',
                'occultism:crushed_packed_ice'
            ],
            text: [Text.translate('ll8.info.occultism.crush_ice_djinni_tier')]
        },
        {
            filter: [
                'occultism:echo_dust'
            ],
            text: [Text.translate('ll8.info.occultism.crush_echo_marid_tier')]
        },
        {
            filter: [
                'occultism:beaver_nugget'
            ],
            text: [Text.translate('ll8.info.occultism.beaver_familiar_snack')]
        },
        {
            filter: [
                'occultism:sweet_honey_heart'
            ],
            text: [Text.translate('ll8.info.occultism.demonic_partner_honey_gift')]
        },
        {
            filter: [
                'occultism:flame_of_automation'
            ],
            text: [Text.translate('ll8.info.occultism.ritual_into_upside_down_bowl')]
        },
        {
            filter: [
                'occultism:fragile_soul_gem_empty',
                'occultism:soul_gem_empty',
                'occultism:trinity_gem_empty'
            ],
            text: [Text.translate('ll8.info.occultism.ritual_craft_gem')]
        },
        {
            filter: [
                'createdieselgenerators:plant_oil_bucket'
            ],
            text: [Text.translate('ll8.info.createdieselgenerators.press_seeds_then_fill_bucket')]
        },
        {
            filter: [
                'createdieselgenerators:ethanol_bucket'
            ],
            text: [Text.translate('ll8.info.createdieselgenerators.ferment_then_fill_bucket')]
        },
        {
            filter: [
                'createdieselgenerators:biodiesel_bucket'
            ],
            text: [Text.translate('ll8.info.createdieselgenerators.mix_oil_and_ethanol_then_fill_bucket')]
        },
        {
            filter: [
                'createdieselgenerators:diesel_bucket',
                'createdieselgenerators:gasoline_bucket'
            ],
            text: [Text.translate('ll8.info.createdieselgenerators.distill_crude_oil_then_fill_bucket')]
        },
        {
            filter: [
                'createdieselgenerators:black_cement_bucket',
                'createdieselgenerators:blue_cement_bucket',
                'createdieselgenerators:brown_cement_bucket',
                'createdieselgenerators:cyan_cement_bucket',
                'createdieselgenerators:gray_cement_bucket',
                'createdieselgenerators:green_cement_bucket',
                'createdieselgenerators:light_blue_cement_bucket',
                'createdieselgenerators:light_gray_cement_bucket',
                'createdieselgenerators:lime_cement_bucket',
                'createdieselgenerators:magenta_cement_bucket',
                'createdieselgenerators:orange_cement_bucket',
                'createdieselgenerators:pink_cement_bucket',
                'createdieselgenerators:purple_cement_bucket',
                'createdieselgenerators:red_cement_bucket',
                'createdieselgenerators:white_cement_bucket',
                'createdieselgenerators:yellow_cement_bucket'
            ],
            text: [Text.translate('ll8.info.createdieselgenerators.mix_concrete_powder_then_fill_bucket')]
        },
        {
            filter: [
                'productivebees:gene_bottle'
            ],
            text: [Text.translate('ll8.info.productivebees.bottle_bee_with_piston')]
        },
        {
            filter: [
                'productivebees:gene'
            ],
            text: [Text.translate('ll8.info.productivebees.centrifuge_squashed_bee')]
        },
        {
            filter: [
                'productivebees:spawn_egg_ashy_mining_bee',
                'productivebees:spawn_egg_blue_banded_bee',
                'productivebees:spawn_egg_chocolate_mining_bee',
                'productivebees:spawn_egg_digger_bee',
                'productivebees:spawn_egg_green_carpenter_bee',
                'productivebees:spawn_egg_leafcutter_bee',
                'productivebees:spawn_egg_reed_bee',
                'productivebees:spawn_egg_resin_bee',
                'productivebees:spawn_egg_sweat_bee',
                'productivebees:spawn_egg_yellow_black_carpenter_bee'
            ],
            text: [Text.translate('ll8.info.productivebees.incubate_type_gene_into_egg')]
        },
        {
            filter: [
                'sgjourney:milky_way_stargate',
                'sgjourney:pegasus_stargate',
                'sgjourney:universe_stargate'
            ],
            text: [Text.translate('ll8.info.sgjourney.break_generated_stargate')]
        },
        {
            filter: [
                'sgjourney:classic_stargate'
            ],
            text: [Text.translate('ll8.info.sgjourney.assemble_classic_stargate')]
        },
        {
            filter: [
                'sgjourney:tollan_stargate'
            ],
            text: [Text.translate('ll8.info.sgjourney.tollan_upgrade_crystal')]
        },
        {
            filter: [
                'sgjourney:red_sandstone_cartouche',
                'sgjourney:sandstone_cartouche',
                'sgjourney:stone_cartouche'
            ],
            text: [Text.translate('ll8.info.sgjourney.mine_cartouche')]
        },
        {
            filter: [
                'sgjourney:red_sandstone_symbol',
                'sgjourney:sandstone_symbol',
                'sgjourney:stone_symbol'
            ],
            text: [Text.translate('ll8.info.sgjourney.archeologist_trade_symbol')]
        },
        {
            filter: [
                'sgjourney:schrodingers_map'
            ],
            text: [Text.translate('ll8.info.sgjourney.villager_map_trade')]
        },
        {
            filter: [
                'sgjourney:goauld_burger'
            ],
            text: [Text.translate('ll8.info.sgjourney.april_fools_jaffa_burger')]
        },
        {
            filter: [
                'cataclysm:the_baby_leviathan_bucket'
            ],
            text: [Text.translate('ll8.info.cataclysm.bucket_tamed_baby_leviathan')]
        },
        {
            filter: [
                'cataclysm:modern_remnant_bucket'
            ],
            text: [Text.translate('ll8.info.cataclysm.bucket_tamed_modern_remnant')]
        },
        {
            filter: [
                'cataclysm:netherite_ministrosity_bucket'
            ],
            text: [Text.translate('ll8.info.cataclysm.bucket_tamed_netherite_ministrosity')]
        },
        {
            filter: [
                'cataclysm:music_disc_the_cataclysmfarer'
            ],
            text: [Text.translate('ll8.info.cataclysm.advancement_kill_all_bosses')]
        },
        {
            filter: [
                'wildernature:elite_bounty',
                'wildernature:field_notes',
                'wildernature:pathfinders_call',
                'wildernature:provision_request',
                'wildernature:tracking_order'
            ],
            text: [Text.translate('ll8.info.wildernature.accept_bounty_at_board')]
        },
        {
            filter: [
                'wildernature:burst_of_experience'
            ],
            text: [Text.translate('ll8.info.wildernature.take_bounty_experience_reward')]
        },
        {
            filter: [
                'wildernature:woodmeal'
            ],
            text: [Text.translate('ll8.info.wildernature.shovel_infested_rotten_log')]
        },
        {
            filter: [
                'wildernature:turkey_egg'
            ],
            text: [Text.translate('ll8.info.wildernature.turkey_lays_egg')]
        },
        {
            filter: [
                'chemlib:cobalt_plate',
                'chemlib:osmium_plate',
                'chemlib:zinc_plate'
            ],
            text: [Text.translate('ll8.info.chemlib.press_plate_in_ie_metal_press')]
        },
        {
            filter: [
                'modern_industrialization:steam_cracked_heavy_fuel_bucket',
                'modern_industrialization:steam_cracked_light_fuel_bucket',
                'modern_industrialization:steam_cracked_naphtha_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.steam_crack_in_chemical_reactor')]
        },
        {
            filter: [
                'modern_industrialization:creosote_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.coke_oven_byproduct')]
        },
        {
            filter: [
                'modern_industrialization:liquid_air_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.compress_air_intake')]
        },
        {
            filter: [
                'modern_industrialization:deuterium_bucket',
                'modern_industrialization:heavy_water_bucket',
                'modern_industrialization:tritium_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.centrifuge_heavy_isotopes')]
        },
        {
            filter: [
                'modern_industrialization:purified_platinum_sulfuric_solution_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.centrifuge_platinum_solution')]
        },
        {
            filter: [
                'modern_industrialization:plant_oil_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.centrifuge_compostables')]
        },
        {
            filter: [
                'quark:cut_vine'
            ],
            text: [Text.translate('ll8.info.quark.shear_vine_in_place')]
        },
        {
            filter: [
                'productivemetalworks:molten_aluminum_bucket',
                'productivemetalworks:molten_amethyst_bucket',
                'productivemetalworks:molten_ancient_debris_bucket',
                'productivemetalworks:molten_blaze_bucket',
                'productivemetalworks:molten_carbon_bucket',
                'productivemetalworks:molten_copper_bucket',
                'productivemetalworks:molten_diamond_bucket',
                'productivemetalworks:molten_emerald_bucket',
                'productivemetalworks:molten_ender_bucket',
                'productivemetalworks:molten_glass_bucket',
                'productivemetalworks:molten_glowstone_bucket',
                'productivemetalworks:molten_gold_bucket',
                'productivemetalworks:molten_heavy_core_bucket',
                'productivemetalworks:molten_iridium_bucket',
                'productivemetalworks:molten_iron_bucket',
                'productivemetalworks:molten_lapis_bucket',
                'productivemetalworks:molten_lead_bucket',
                'productivemetalworks:molten_nickel_bucket',
                'productivemetalworks:molten_osmium_bucket',
                'productivemetalworks:molten_platinum_bucket',
                'productivemetalworks:molten_quartz_bucket',
                'productivemetalworks:molten_redstone_bucket',
                'productivemetalworks:molten_shulker_shell_bucket',
                'productivemetalworks:molten_silver_bucket',
                'productivemetalworks:molten_slime_bucket',
                'productivemetalworks:molten_tin_bucket',
                'productivemetalworks:molten_uranium_bucket',
                'productivemetalworks:molten_wax_bucket',
                'productivemetalworks:molten_zinc_bucket'
            ],
            text: [Text.translate('ll8.info.productivemetalworks.melt_in_foundry_bucket_from_drain')]
        },
        {
            filter: [
                'grotesque_steve:manualbook'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.given_on_first_join')]
        },
        {
            filter: [
                'eternal_starlight:mana_crystal_shard'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.drop_while_fighting')]
        },
        {
            filter: [
                'ars_nouveau:blank_glyph'
            ],
            text: [Text.translate('ll8.info.ars_nouveau.quest_reward')]
        },
        {
            filter: [
                'naturalist:anglerfish_bucket',
                'naturalist:bass_bucket',
                'naturalist:blobfish_bucket',
                'naturalist:catfish_bucket',
                'naturalist:giant_isopod_bucket',
                'naturalist:jellyfish_bucket',
                'naturalist:piranha_bucket',
                'naturalist:ray_bucket',
                'naturalist:starfish_bucket'
            ],
            text: [Text.translate('ll8.info.naturalist.fill_bucket_from_water_mob')]
        },
        {
            filter: [
                'naturalist:duck_bucket'
            ],
            text: [Text.translate('ll8.info.naturalist.empty_bucket_on_duckling')]
        },
        {
            filter: [
                'naturalist:music_disc_wild_ones'
            ],
            text: [Text.translate('ll8.info.naturalist.drop_from_fox_holding_disc')]
        },
        {
            filter: [
                'naturalist:music_disc_death_by_hogs'
            ],
            text: [Text.translate('ll8.info.naturalist.drop_when_boar_kills_player')]
        },
        {
            filter: [
                'relics:chef_hat',
                'relics:hunting_belt'
            ],
            text: [Text.translate('ll8.info.relics.chest_loot_village')]
        },
        {
            filter: [
                'relics:rider_flute'
            ],
            text: [Text.translate('ll8.info.relics.chest_loot_village_or_cave')]
        },
        {
            filter: [
                'relics:piglin_mask'
            ],
            text: [Text.translate('ll8.info.relics.chest_loot_bastion')]
        },
        {
            filter: [
                'relics:ghostly_mantle',
                'relics:reflective_necklace',
                'relics:ring_of_the_seven_deadly_sins',
                'relics:shield_of_retaliation',
                'relics:sphere_of_self_sacrifice'
            ],
            text: [Text.translate('ll8.info.relics.chest_loot_nether')]
        },
        {
            filter: [
                'relics:chorus_staff',
                'relics:clot_of_time',
                'relics:glitchy_mantle',
                'relics:kinetic_belt',
                'relics:midnight_mantle'
            ],
            text: [Text.translate('ll8.info.relics.chest_loot_end')]
        },
        {
            filter: [
                'relics:roller_skate'
            ],
            text: [Text.translate('ll8.info.relics.chest_loot_overworld_any')]
        },
        {
            filter: [
                'relics:experience_disperser'
            ],
            text: [Text.translate('ll8.info.relics.chest_loot_any')]
        },
        {
            filter: [
                'deeperdarker:black_sculk_transmitter',
                'deeperdarker:blue_sculk_transmitter',
                'deeperdarker:brown_sculk_transmitter',
                'deeperdarker:cyan_sculk_transmitter',
                'deeperdarker:gray_sculk_transmitter',
                'deeperdarker:green_sculk_transmitter',
                'deeperdarker:light_blue_sculk_transmitter',
                'deeperdarker:light_gray_sculk_transmitter',
                'deeperdarker:lime_sculk_transmitter',
                'deeperdarker:magenta_sculk_transmitter',
                'deeperdarker:orange_sculk_transmitter',
                'deeperdarker:pink_sculk_transmitter',
                'deeperdarker:purple_sculk_transmitter',
                'deeperdarker:red_sculk_transmitter',
                'deeperdarker:white_sculk_transmitter',
                'deeperdarker:yellow_sculk_transmitter'
            ],
            text: [Text.translate('ll8.info.deeperdarker.dye_in_crafting_grid')]
        },
        {
            filter: [
                'immersiveengineering:potion_bucket'
            ],
            text: [Text.translate('ll8.info.immersiveengineering.fill_potion_from_tank')]
        },
        {
            filter: [
                'immersivepetroleum:crudeoil_bucket'
            ],
            text: [Text.translate('ll8.info.immersivepetroleum.fill_from_tank_crude_oil')]
        },
        {
            filter: [
                'immersivepetroleum:petcoke_dust'
            ],
            text: [Text.translate('ll8.info.immersivepetroleum.crusher_petcoke')]
        },
        {
            filter: [
                'immersivepetroleum:survey_result'
            ],
            text: [Text.translate('ll8.info.immersivepetroleum.seismic_survey_shot')]
        },
        {
            filter: [
                'evilcraft:broom'
            ],
            text: [Text.translate('ll8.info.evilcraft.chest_loot_broom')]
        },
        {
            filter: [
                'evilcraft:condensed_blood'
            ],
            text: [Text.translate('ll8.info.evilcraft.chest_loot_condensed_blood')]
        },
        {
            filter: [
                'evilcraft:origins_of_darkness'
            ],
            text: [Text.translate('ll8.info.evilcraft.spirit_portal_book_or_chest')]
        },
        {
            filter: [
                'evilcraft:bucket_blood'
            ],
            text: [Text.translate('ll8.info.evilcraft.fill_bucket_from_tank')]
        },
        {
            filter: [
                'ufo:gelid_cryotheum_bucket',
                'ufo:neutron_star_fragment_bucket',
                'ufo:pulsar_fragment_bucket',
                'ufo:white_dwarf_fragment_bucket'
            ],
            text: [Text.translate('ll8.info.ufo.fill_from_dma_tank')]
        },
        {
            filter: [
                'enderio:cloud_seed_bucket',
                'enderio:cloud_seed_concentrated_bucket',
                'enderio:fire_water_bucket',
                'enderio:hootch_bucket',
                'enderio:liquid_darkness_bucket',
                'enderio:liquid_sunshine_bucket',
                'enderio:nutrient_distillation_bucket',
                'enderio:rocket_fuel_bucket'
            ],
            text: [Text.translate('ll8.info.enderio.fill_from_vat')]
        },
        {
            filter: [
                'enderio:location_printout'
            ],
            text: [Text.translate('ll8.info.enderio.coordinate_selector_with_paper')]
        },
        {
            filter: [
                'enigmaticlegacyplus:enchanted_ichor_bottle'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.first_ichor_bottle_from_chest')]
        },
        {
            filter: [
                'enigmaticlegacyplus:enchanted_astral_fruit'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.end_city_chest_while_cursed')]
        },
        {
            filter: [
                'enigmaticlegacyplus:cursed_ring'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.quest_reward')]
        },
        {
            filter: [
                'enigmaticlegacyplus:soul_crystal'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.drop_on_death_cursed')]
        },
        {
            filter: [
                'enigmaticlegacyplus:storage_crystal'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.drop_on_death_with_amulet')]
        },
        {
            filter: [
                'enigmaticlegacyplus:enigmatic_eye_active'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.awaken_enigmatic_eye')]
        },
        {
            filter: [
                'enigmaticlegacyplus:etherium_core_active'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.charge_core_with_starlight_pearl')]
        },
        {
            filter: [
                'framedblocks:framing_saw_pattern'
            ],
            text: [Text.translate('ll8.info.framedblocks.encode_in_framing_saw')]
        },
        {
            filter: [
                'malum:umbral_spirit'
            ],
            text: [Text.translate('ll8.info.malum.weeping_well_rejection')]
        },
        {
            filter: [
                'malum:geas'
            ],
            text: [Text.translate('ll8.info.malum.soul_binding_brazier')]
        },
        {
            filter: [
                'malum:soul_of_a_scythe',
                'malum:soul_of_the_anchor'
            ],
            text: [Text.translate('ll8.info.malum.thrown_weapon_placeholder')]
        },
        {
            filter: [
                'mekanism:brine_bucket'
            ],
            text: [Text.translate('ll8.info.mekanism.thermal_evaporation_plant')]
        },
        {
            filter: [
                'mekanism:heavy_water_bucket'
            ],
            text: [Text.translate('ll8.info.mekanism.electric_pump_filter')]
        },
        {
            filter: [
                'mekanism:nutritional_paste_bucket'
            ],
            text: [Text.translate('ll8.info.mekanism.nutritional_liquifier')]
        },
        {
            filter: [
                'the_backwoods:faded_apple',
                'the_backwoods:faded_beetroot',
                'the_backwoods:faded_dried_kelp',
                'the_backwoods:faded_enchanted_golden_apple',
                'the_backwoods:faded_golden_apple'
            ],
            text: [Text.translate('ll8.info.the_backwoods.fade_in_loss_inventory')]
        },
        {
            filter: [
                'twilightforest:magic_painting'
            ],
            text: [Text.translate('ll8.info.twilightforest.break_lich_tower_gallery_painting')]
        },
        {
            filter: [
                'frightsdelight:cobweb_ring_candy',
                'frightsdelight:ghasttear_ring_candy',
                'frightsdelight:rotten_flesh_ring_candy',
                'frightsdelight:slimeapple_ring_candy',
                'frightsdelight:soul_berry_ring_candy',
                'frightsdelight:spidereye_ring_candy',
                'frightsdelight:wither_berry_ring_candy'
            ],
            text: [Text.translate('ll8.info.frightsdelight.ring_candy_mold_harden')]
        },
        {
            filter: [
                'rftoolsdim:attribute_dimlet',
                'rftoolsdim:biome_category_dimlet',
                'rftoolsdim:biome_controller_dimlet',
                'rftoolsdim:biome_dimlet',
                'rftoolsdim:block_dimlet',
                'rftoolsdim:feature_dimlet',
                'rftoolsdim:fluid_dimlet',
                'rftoolsdim:sky_dimlet',
                'rftoolsdim:structure_dimlet',
                'rftoolsdim:tag_dimlet',
                'rftoolsdim:terrain_dimlet',
                'rftoolsdim:time_dimlet'
            ],
            text: [Text.translate('ll8.info.rftoolsdim.craft_in_dimlet_workbench')]
        },
        {
            filter: [
                'stellaris:oil_bucket'
            ],
            text: [Text.translate('ll8.info.stellaris.bucket_from_oil_lake_or_pumpjack')]
        },
        {
            filter: [
                'stellaris:moon_berries'
            ],
            text: [Text.translate('ll8.info.stellaris.pick_from_moon_vines')]
        },
        {
            filter: [
                'ars_elemental:firenando_familiar',
                'ars_elemental:flashjack_familiar',
                'ars_elemental:siren_familiar'
            ],
            text: [Text.translate('ll8.info.ars_elemental.ritual_of_binding_familiar')]
        },
        {
            filter: [
                'ars_elemental:mermaid_rock'
            ],
            text: [Text.translate('ll8.info.ars_elemental.siren_charm_on_prismarine')]
        },
        {
            filter: [
                'extended_industrialization:canned_food'
            ],
            text: [Text.translate('ll8.info.extended_industrialization.canning_machine_food')]
        },
        {
            filter: [
                'extended_industrialization:nyano_helmet',
                'extended_industrialization:nyano_quantum_helmet'
            ],
            text: [Text.translate('ll8.info.extended_industrialization.cat_upgrade_nano_helmet')]
        },
        {
            filter: [
                'oritech:still_oil_bucket'
            ],
            text: [Text.translate('ll8.info.oritech.bucket_from_oil_spring')]
        },
        {
            filter: [
                'wildernature:guild_commission'
            ],
            text: [Text.translate('ll8.info.wildernature.accept_commission_at_board')]
        },
        {
            filter: [
                'apothic_compats:adorned_boots',
                'apothic_compats:back_plate',
                'apothic_compats:body_chain',
                'apothic_compats:embellished_curio',
                'apothic_compats:fancy_charm',
                'apothic_compats:flashy_bracelet',
                'apothic_compats:florid_belt',
                'apothic_compats:head_cover',
                'apothic_compats:ornamented_necklace',
                'apothic_compats:ornate_ring',
                'apothic_compats:showy_gloves'
            ],
            text: [Text.translate('ll8.info.apothic_compats.apotheosis_affix_loot')]
        },
        {
            filter: [
                'justdirethings:xp_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.justdirethings.fill_from_experience_holder')]
        },
        {
            filter: [
                'justdirethings:goosoil_tier4'
            ],
            text: [Text.translate('ll8.info.justdirethings.till_dirt_eclipse_alloy_hoe')]
        },
        {
            filter: [
                'justdirethings:time_crystal_budding_block'
            ],
            text: [Text.translate('ll8.info.justdirethings.goo_converts_budding_amethyst')]
        },
        {
            filter: [
                'netherdepthsupgrade:blazefish_bucket',
                'netherdepthsupgrade:bonefish_bucket',
                'netherdepthsupgrade:eyeball_fish_bucket',
                'netherdepthsupgrade:fortress_grouper_bucket',
                'netherdepthsupgrade:glowdine_bucket',
                'netherdepthsupgrade:lava_pufferfish_bucket',
                'netherdepthsupgrade:magmacubefish_bucket',
                'netherdepthsupgrade:obsidianfish_bucket',
                'netherdepthsupgrade:searing_cod_bucket',
                'netherdepthsupgrade:soulsucker_bucket',
                'netherdepthsupgrade:wither_bonefish_bucket'
            ],
            text: [Text.translate('ll8.info.netherdepthsupgrade.scoop_live_fish_with_lava_bucket')]
        },
        {
            filter: [
                'pneumaticcraft:oil_bucket'
            ],
            text: [Text.translate('ll8.info.pneumaticcraft.scoop_oil_lake')]
        },
        {
            filter: [
                'pneumaticcraft:memory_essence_bucket'
            ],
            text: [Text.translate('ll8.info.pneumaticcraft.store_player_xp')]
        },
        {
            filter: [
                'thavma:eye_of_warden'
            ],
            text: [Text.translate('ll8.info.thavma.drop_from_warden')]
        },
        {
            filter: [
                'thavma:book'
            ],
            text: [Text.translate('ll8.info.thavma.wand_on_bookshelf')]
        },
        {
            filter: [
                'create_enchantment_industry:experience_bucket'
            ],
            text: [Text.translate('ll8.info.create_enchantment_industry.fill_bucket_from_tank')]
        },
        {
            filter: [
                'create_enchantment_industry:crystal_essence_bucket'
            ],
            text: [Text.translate('ll8.info.create_enchantment_industry.mix_gem_dust_fill_bucket')]
        },
        {
            filter: [
                'create_enchantment_industry:infused_dragon_breath_bucket'
            ],
            text: [Text.translate('ll8.info.create_enchantment_industry.infuse_or_drain_breath_fill_bucket')]
        },
        {
            filter: [
                'create_enchantment_industry:grindstone_drain'
            ],
            text: [Text.translate('ll8.info.create_enchantment_industry.place_grindstone_on_item_drain')]
        },
        {
            filter: [
                'mcwholidays:bat_awake'
            ],
            text: [Text.translate('ll8.info.mcwholidays.toggle_sleeping_bat')]
        },
        {
            filter: [
                'mcwholidays:happy_ghost',
                'mcwholidays:haunting_ghost'
            ],
            text: [Text.translate('ll8.info.mcwholidays.toggle_ghost')]
        },
        {
            filter: [
                'sgjourney:falcon_helmet'
            ],
            text: [Text.translate('ll8.info.sgjourney.drop_from_abydos_jaffa')]
        },
        {
            filter: [
                'starbunclemania:mixer_wixie_cauldron',
                'starbunclemania:smelting_wixie_cauldron',
                'starbunclemania:stonecutting_wixie_cauldron'
            ],
            text: [Text.translate('ll8.info.starbunclemania.wixie_charm_on_vanilla_block')]
        },
        {
            filter: [
                'starbunclemania:cooking_pot_wixie_cauldron',
                'starbunclemania:cutting_wixie_cauldron'
            ],
            text: [Text.translate('ll8.info.starbunclemania.wixie_charm_on_farmersdelight_block')]
        },
        {
            filter: [
                'touhou_little_maid:photo'
            ],
            text: [Text.translate('ll8.info.touhou_little_maid.camera_shot_of_maid')]
        },
        {
            filter: [
                'ascended_quark:blue_swet_in_a_bucket',
                'ascended_quark:blue_swet_in_a_skyroot_bucket',
                'ascended_quark:golden_swet_in_a_bucket',
                'ascended_quark:golden_swet_in_a_skyroot_bucket',
                'ascended_quark:slime_in_a_skyroot_bucket'
            ],
            text: [Text.translate('ll8.info.ascended_quark.scoop_mob_with_bucket')]
        },
        {
            filter: [
                'draconicevolution:mob_soul'
            ],
            text: [Text.translate('ll8.info.draconicevolution.reaper_kill_drop')]
        },
        {
            filter: [
                'earthmobsmod:teacup_pig_pot'
            ],
            text: [Text.translate('ll8.info.earthmobsmod.capture_teacup_pig')]
        },
        {
            filter: [
                'earthmobsmod:tropical_slime_bucket'
            ],
            text: [Text.translate('ll8.info.earthmobsmod.capture_tiny_tropical_slime')]
        },
        {
            filter: [
                'actuallyadditions:water_bowl'
            ],
            text: [Text.translate('ll8.info.actuallyadditions.bowl_on_water')]
        },
        {
            filter: [
                'actuallyadditions:coffee_cup'
            ],
            text: [Text.translate('ll8.info.actuallyadditions.coffee_machine')]
        },
        {
            filter: [
                'apotheosis:music_disc_flash',
                'apotheosis:music_disc_glimmer',
                'apotheosis:music_disc_shimmer'
            ],
            text: [Text.translate('ll8.info.apotheosis.drop_from_invader_boss')]
        },
        {
            filter: [
                'ars_additions:enchanting_wixie_cauldron'
            ],
            text: [Text.translate('ll8.info.ars_additions.convert_apparatus_with_wixie_charm')]
        },
        {
            filter: [
                'ars_additions:imbued_spell_parchment'
            ],
            text: [Text.translate('ll8.info.ars_additions.imbue_spell_parchment')]
        },
        {
            filter: [
                'ars_additions:nexus_warp_scroll'
            ],
            text: [Text.translate('ll8.info.ars_additions.take_from_warp_nexus')]
        },
        {
            filter: [
                'butchercraft:cow_skull_head'
            ],
            text: [Text.translate('ll8.info.butchercraft.place_skull_from_cow_head')]
        },
        {
            filter: [
                'endersdelight:stuffed_shulker_bowl'
            ],
            text: [Text.translate('ll8.info.endersdelight.serve_from_stuffed_shulker_feast')]
        },
        {
            filter: [
                'energizedpower:dirty_water_bucket'
            ],
            text: [Text.translate('ll8.info.energizedpower.fill_dirty_water_in_fluid_filler')]
        },
        {
            filter: [
                'reanimal:kiwi_egg',
                'reanimal:ostrich_egg',
                'reanimal:penguin_egg',
                'reanimal:pigeon_egg',
                'reanimal:vulture_egg'
            ],
            text: [Text.translate('ll8.info.reanimal.bird_lays_egg_over_time')]
        },
        {
            filter: [
                'rusticdelight:potted_wild_bell_peppers',
                'rusticdelight:potted_wild_coffee',
                'rusticdelight:potted_wild_cotton',
                'rusticdelight:potted_wild_dark_bell_peppers',
                'rusticdelight:potted_wild_pale_bell_peppers'
            ],
            text: [Text.translate('ll8.info.rusticdelight.plant_in_flower_pot')]
        },
        {
            filter: [
                'securitycraft:taser_powered'
            ],
            text: [Text.translate('ll8.info.securitycraft.charge_taser_with_redstone')]
        },
        {
            filter: [
                'create_connected:andesite_encased_cross_connector',
                'create_connected:brass_encased_cross_connector'
            ],
            text: [Text.translate('ll8.info.create_connected.encase_with_casing')]
        },
        {
            filter: [
                'mobflowutilities:life_catalyst'
            ],
            text: [Text.translate('ll8.info.mobflowutilities.drop_from_bosses_and_mobs')]
        },
        {
            filter: [
                'mobflowutilities:gene_sample_vial'
            ],
            text: [Text.translate('ll8.info.mobflowutilities.sample_mob_with_empty_vial')]
        },
        {
            filter: [
                'spider_overhaul:bottle_of_spider_pollen'
            ],
            text: [Text.translate('ll8.info.spider_overhaul.bottle_jungle_spider_puddle')]
        },
        {
            filter: [
                'arsdelight:bowl_of_honey_glazed_chimera'
            ],
            text: [Text.translate('ll8.info.arsdelight.serve_from_chimera_feast')]
        },
        {
            filter: [
                'crittersandcompanions:dumbo_octopus_bucket',
                'crittersandcompanions:koi_fish_bucket',
                'crittersandcompanions:sea_bunny_bucket'
            ],
            text: [Text.translate('ll8.info.crittersandcompanions.bucket_water_mob')]
        },
        {
            filter: [
                'irons_jewelry:garnet',
                'irons_jewelry:moonstone',
                'irons_jewelry:onyx'
            ],
            text: [Text.translate('ll8.info.irons_jewelry.chest_loot_and_jeweler_trade')]
        },
        {
            filter: [
                'livingthings:ancient_helmet'
            ],
            text: [Text.translate('ll8.info.livingthings.drop_from_ancient_blaze')]
        },
        {
            filter: [
                'livingthings:ostrich_egg'
            ],
            text: [Text.translate('ll8.info.livingthings.take_from_ostrich_nest')]
        },
        {
            filter: [
                'livingthings:seahorse_bucket'
            ],
            text: [Text.translate('ll8.info.livingthings.bucket_seahorse')]
        },
        {
            filter: [
                'advanced_ae:quantum_infusion_bucket'
            ],
            text: [Text.translate('ll8.info.advanced_ae.fill_bucket_from_reaction_chamber')]
        },
        {
            filter: [
                'twilightdelight:plate_of_fiery_snakes',
                'twilightdelight:plate_of_lily_chicken',
                'twilightdelight:plate_of_meef_wellington'
            ],
            text: [Text.translate('ll8.info.twilightdelight.serve_from_feast_block')]
        },
        {
            filter: [
                'buildinggadgets2:template'
            ],
            text: [Text.translate('ll8.info.buildinggadgets2.save_in_template_manager')]
        },
        {
            filter: [
                'extradelight:egg_yolk'
            ],
            text: [Text.translate('ll8.info.extradelight.separate_egg_in_mixing_bowl')]
        },
        {
            filter: [
                'rootsclassic:staff'
            ],
            text: [Text.translate('ll8.info.rootsclassic.imbue_stick_with_spell_powder')]
        },
        {
            filter: [
                'waystones:bound_scroll'
            ],
            text: [Text.translate('ll8.info.waystones.bind_blank_scroll_on_waystone')]
        },
        {
            filter: [
                'amendments:dye_bottle'
            ],
            text: [Text.translate('ll8.info.amendments.fill_bottle_from_dye_cauldron')]
        },
        {
            filter: [
                'brewinandchewin:fiery_fondue'
            ],
            text: [Text.translate('ll8.info.brewinandchewin.serve_from_placed_pot')]
        },
        {
            filter: [
                'create_mechanical_chicken:chicken_nutrient_bucket'
            ],
            text: [Text.translate('ll8.info.create_mechanical_chicken.fill_bucket_with_nutrient_fluid')]
        },
        {
            filter: [
                'ironfurnaces:rainbow_coal'
            ],
            text: [Text.translate('ll8.info.ironfurnaces.explode_million_furnace')]
        },
        {
            filter: [
                'appmek:chemical_p2p_tunnel'
            ],
            text: [Text.translate('ll8.info.appmek.attune_p2p_with_chemical_tank')]
        },
        {
            filter: [
                'powah:binding_card_dim'
            ],
            text: [Text.translate('ll8.info.powah.binding_card_on_enderman')]
        },
        {
            filter: [
                'piglinproliferation:buckler'
            ],
            text: [Text.translate('ll8.info.piglinproliferation.bastion_chest_or_brute')]
        },
        {
            filter: [
                'oceansdelight:bowl_of_guardian_soup'
            ],
            text: [Text.translate('ll8.info.oceansdelight.serve_feast_with_bowl')]
        },
        {
            filter: [
                'rftoolspower:blazing_rod'
            ],
            text: [Text.translate('ll8.info.rftoolspower.blazing_agitator')]
        },
        {
            filter: [
                'ribbits:maraca'
            ],
            text: [Text.translate('ll8.info.ribbits.ribbit_merchant_trade')]
        },
        {
            filter: [
                'refurbished_furniture:package'
            ],
            text: [Text.translate('ll8.info.refurbished_furniture.send_via_post_box')]
        },
        {
            filter: [
                'rftoolsstorage:tablet_scanner'
            ],
            text: [Text.translate('ll8.info.rftoolsstorage.install_storage_module_in_tablet')]
        },
        {
            filter: [
                'shrink:shrink_bottle'
            ],
            text: [Text.translate('ll8.info.shrink.bottle_shrunk_mob')]
        },
        {
            filter: [
                'silentgems:cup_of_coffee'
            ],
            text: [Text.translate('ll8.info.silentgems.rabbit_drops_coffee')]
        },
        {
            filter: [
                'utilitarian:slime_bucket'
            ],
            text: [Text.translate('ll8.info.utilitarian.bucket_a_small_slime')]
        },
        {
            filter: [
                'whaleborne:music_disc_the_plank'
            ],
            text: [Text.translate('ll8.info.whaleborne.axe_off_whale_underside')]
        },
        {
            filter: [
                'fishofthieves:ancientscale_bucket',
                'fishofthieves:battlegill_bucket',
                'fishofthieves:devilfish_bucket',
                'fishofthieves:islehopper_bucket',
                'fishofthieves:plentifin_bucket',
                'fishofthieves:pondie_bucket',
                'fishofthieves:splashtail_bucket',
                'fishofthieves:stormfish_bucket',
                'fishofthieves:wildsplash_bucket',
                'fishofthieves:wrecker_bucket'
            ],
            text: [Text.translate('ll8.info.fishofthieves.bucket_live_fish')]
        },
        {
            filter: [
                'fishofthieves:great_mouth_pottery_sherd',
                'fishofthieves:kraken_pottery_sherd',
                'fishofthieves:megalodon_pottery_sherd',
                'fishofthieves:stormfish_pottery_sherd'
            ],
            text: [Text.translate('ll8.info.fishofthieves.brush_ocean_ruin_suspicious_block')]
        },
        {
            filter: [
                'fishofthieves:half_pineapple'
            ],
            text: [Text.translate('ll8.info.fishofthieves.eat_pineapple')]
        },
        {
            filter: [
                'create:andesite_encased_cogwheel',
                'create:andesite_encased_large_cogwheel',
                'create:andesite_encased_shaft',
                'create:brass_encased_cogwheel',
                'create:brass_encased_large_cogwheel',
                'create:brass_encased_shaft'
            ],
            text: [Text.translate('ll8.info.create.encase_with_casing')]
        },
        {
            filter: [
                'dungeonsdelight:polterghast_pizza_slice'
            ],
            text: [Text.translate('ll8.info.dungeonsdelight.slice_pizza_with_knife')]
        },
        {
            filter: [
                'dungeonsdelight:candied_silverfish_sucker'
            ],
            text: [Text.translate('ll8.info.dungeonsdelight.hit_silverfish_with_rock_candy')]
        },
        {
            filter: [
                'spelunkers_charm:mining_helmet'
            ],
            text: [Text.translate('ll8.info.spelunkers_charm.wandering_trader_rare_trade')]
        },
        {
            filter: [
                'undergarden:gwibling_bucket'
            ],
            text: [Text.translate('ll8.info.undergarden.bucket_gwibling')]
        },
        {
            filter: [
                'undergarden:music_disc_gloomper_secret'
            ],
            text: [Text.translate('ll8.info.undergarden.use_anthem_disc_on_gloomper')]
        },
        {
            filter: [
                'dndesires:chocolate_milkshake_bucket',
                'dndesires:glowberry_milkshake_bucket',
                'dndesires:pumpkin_milkshake_bucket',
                'dndesires:strawberry_milkshake_bucket',
                'dndesires:vanilla_milkshake_bucket'
            ],
            text: [Text.translate('ll8.info.dndesires.spout_fill_bucket')]
        },
        {
            filter: [
                'mysticalagradditions:molten_imperium_bucket',
                'mysticalagradditions:molten_inferium_bucket',
                'mysticalagradditions:molten_prudentium_bucket',
                'mysticalagradditions:molten_supremium_bucket',
                'mysticalagradditions:molten_tertium_bucket'
            ],
            text: [Text.translate('ll8.info.mysticalagradditions.melt_in_pmw_foundry')]
        },
        {
            filter: [
                'modern_industrialization:caprolactam_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.caprolactam')]
        },
        {
            filter: [
                'modern_industrialization:synthetic_rubber_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.synthetic_rubber')]
        },
        {
            filter: [
                'modern_industrialization:diesel_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.diesel')]
        },
        {
            filter: [
                'modern_industrialization:boosted_diesel_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.boosted_diesel')]
        },
        {
            filter: [
                'modern_industrialization:heavy_water_steam_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.heavy_water_steam')]
        },
        {
            filter: [
                'immersiveengineering:creosote_bucket'
            ],
            text: [Text.translate('ll8.info.immersiveengineering.creosote')]
        },
        {
            filter: [
                'immersiveengineering:plantoil_bucket'
            ],
            text: [Text.translate('ll8.info.immersiveengineering.plantoil')]
        },
        {
            filter: [
                'immersiveengineering:ethanol_bucket'
            ],
            text: [Text.translate('ll8.info.immersiveengineering.ethanol')]
        },
        {
            filter: [
                'immersiveengineering:herbicide_bucket'
            ],
            text: [Text.translate('ll8.info.immersiveengineering.herbicide')]
        },
        {
            filter: [
                'enigmaticlegacyplus:wormhole_potion'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.wormhole')]
        },
        {
            filter: [
                'enigmaticlegacyplus:twisted_potion'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.twisted')]
        },
        {
            filter: [
                'enigmaticlegacyplus:bless_potion'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.purification')]
        },
        {
            filter: [
                'justdirethings:polymorphic_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.justdirethings.polymorphic')]
        },
        {
            filter: [
                'justdirethings:unstable_portal_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.justdirethings.unstable_portal')]
        },
        {
            filter: [
                'mynethersdelight:plate_of_stuffed_hoglin_snout'
            ],
            text: [Text.translate('ll8.info.mynethersdelight.snout')]
        },
        {
            filter: [
                'mynethersdelight:plate_of_stuffed_hoglin_ham'
            ],
            text: [Text.translate('ll8.info.mynethersdelight.ham')]
        },
        {
            filter: [
                'touhou_little_maid:favorability_tool_add',
                'touhou_little_maid:favorability_tool_full',
                'touhou_little_maid:favorability_tool_reduce',
                'touhou_little_maid:monster_list',
                'touhou_little_maid:owner_conversion_tool',
                'touhou_little_maid:substitute_jizo'
            ],
            text: [Text.translate('ll8.info.touhou_little_maid.loot_bundle_random_roll')]
        },
        {
            filter: [
                'farmersdelight:gleaming_salad',
                'farmersdelight:honey_glazed_ham',
                'farmersdelight:roast_chicken',
                'farmersdelight:shepherds_pie',
                'farmersdelight:stuffed_pumpkin'
            ],
            text: [Text.translate('ll8.info.farmersdelight.serving_from_feast_block')]
        },
        {
            filter: [
                'herbalbrews:black_tea_leaf_block'
            ],
            text: [Text.translate('ll8.info.herbalbrews.from_dried_green')]
        },
        {
            filter: [
                'herbalbrews:dried_out_green_tea_leaf_block'
            ],
            text: [Text.translate('ll8.info.herbalbrews.from_green')]
        },
        {
            filter: [
                'herbalbrews:oolong_tea_leaf_block'
            ],
            text: [Text.translate('ll8.info.herbalbrews.from_mixed')]
        },
        {
            filter: [
                'reliquified_ars_nouveau:architects_staff',
                'reliquified_ars_nouveau:archmage_glove',
                'reliquified_ars_nouveau:ballistarian_bracer',
                'reliquified_ars_nouveau:cloak_of_concealment',
                'reliquified_ars_nouveau:emblem_of_assault',
                'reliquified_ars_nouveau:emblem_of_defense',
                'reliquified_ars_nouveau:emblem_of_devotion',
                'reliquified_ars_nouveau:flaming_bracer',
                'reliquified_ars_nouveau:horn_of_the_wild_hunter',
                'reliquified_ars_nouveau:illusionists_mantle',
                'reliquified_ars_nouveau:mana_ring',
                'reliquified_ars_nouveau:quantum_bubble',
                'reliquified_ars_nouveau:ring_of_last_will',
                'reliquified_ars_nouveau:ring_of_thrift',
                'reliquified_ars_nouveau:spiked_cloak',
                'reliquified_ars_nouveau:staff_of_the_spectral_walker',
                'reliquified_ars_nouveau:whirling_broom',
                'reliquified_ars_nouveau:whirlisprig_petals',
                'reliquified_ars_nouveau:wing_of_the_wild_stalker'
            ],
            text: [Text.translate('ll8.info.reliquified_ars_nouveau.kill_mimic')]
        },
        {
            filter: [
                'stellaris:diesel_bucket'
            ],
            text: [Text.translate('ll8.info.stellaris.diesel_from_fuel_refinery')]
        },
        {
            filter: [
                'stellaris:hydrogen_bucket'
            ],
            text: [Text.translate('ll8.info.stellaris.hydrogen_from_water_separator')]
        },
        {
            filter: [
                'actuallyadditions:canola_oil_bucket'
            ],
            text: [Text.translate('ll8.info.actuallyadditions.fill_from_press_or_barrel')]
        },
        {
            filter: [
                'actuallyadditions:refined_canola_oil_bucket'
            ],
            text: [Text.translate('ll8.info.actuallyadditions.refined_from_fermenting_barrel')]
        },
        {
            filter: [
                'actuallyadditions:crystallized_oil_bucket'
            ],
            text: [Text.translate('ll8.info.actuallyadditions.crystallized')]
        },
        {
            filter: [
                'actuallyadditions:empowered_oil_bucket'
            ],
            text: [Text.translate('ll8.info.actuallyadditions.empowered')]
        },
        {
            filter: [
                'advanced_ae:adv_processing_pattern'
            ],
            text: [Text.translate('ll8.info.advanced_ae.encode_in_adv_pattern_encoder')]
        },
        {
            filter: [
                'ae2:item_p2p_tunnel',
                'ae2:light_p2p_tunnel',
                'ae2:redstone_p2p_tunnel'
            ],
            text: [Text.translate('ll8.info.ae2.p2p_attunement')]
        },
        {
            filter: [
                'ae2:name_press'
            ],
            text: [Text.translate('ll8.info.ae2.cut_with_quartz_knife')]
        },
        {
            filter: [
                'ae2:smithing_table_pattern',
                'ae2:stonecutting_pattern'
            ],
            text: [Text.translate('ll8.info.ae2.encode_in_pattern_terminal')]
        },
        {
            filter: [
                'ae2netanalyser:tick_analyser'
            ],
            text: [Text.translate('ll8.info.ae2netanalyser.loot_bundle_random_pick')]
        },
        {
            filter: [
                'alexscaves:spawn_egg_boundroid',
                'alexscaves:spawn_egg_caniac',
                'alexscaves:spawn_egg_caramel_cube',
                'alexscaves:spawn_egg_corrodent',
                'alexscaves:spawn_egg_deep_one',
                'alexscaves:spawn_egg_deep_one_knight',
                'alexscaves:spawn_egg_ferrouslime',
                'alexscaves:spawn_egg_gingerbread_man',
                'alexscaves:spawn_egg_gossamer_worm',
                'alexscaves:spawn_egg_gum_worm',
                'alexscaves:spawn_egg_gumbeeper',
                'alexscaves:spawn_egg_gummy_bear',
                'alexscaves:spawn_egg_hullbreaker',
                'alexscaves:spawn_egg_lanternfish',
                'alexscaves:spawn_egg_licowitch',
                'alexscaves:spawn_egg_luxtructosaurus',
                'alexscaves:spawn_egg_magnetron',
                'alexscaves:spawn_egg_mine_guardian',
                'alexscaves:spawn_egg_notor',
                'alexscaves:spawn_egg_radgill',
                'alexscaves:spawn_egg_sea_pig',
                'alexscaves:spawn_egg_sweetish_fish',
                'alexscaves:spawn_egg_teletor',
                'alexscaves:spawn_egg_trilocaris',
                'alexscaves:spawn_egg_tripodfish'
            ],
            text: [Text.translate('ll8.info.alexscaves.gm_chicken_swab_spawn_egg')]
        },
        {
            filter: [
                'apotheosis:sigil_of_supremacy'
            ],
            text: [Text.translate('ll8.info.apotheosis.endless_invader_gateway')]
        },
        {
            filter: [
                'ars_elemental:air_caster_tome',
                'ars_elemental:anima_caster_tome',
                'ars_elemental:earth_caster_tome',
                'ars_elemental:fire_caster_tome',
                'ars_elemental:manipulation_caster_tome',
                'ars_elemental:water_caster_tome'
            ],
            text: [Text.translate('ll8.info.ars_elemental.dungeon_chest_loot')]
        },
        {
            filter: [
                'ars_elemental:anima_essence'
            ],
            text: [Text.translate('ll8.info.ars_elemental.imbue_source_gem')]
        },
        {
            filter: [
                'ars_nouveau:alakarkinos_se'
            ],
            text: [Text.translate('ll8.info.ars_nouveau.mob_swab_gm_chicken')]
        },
        {
            filter: [
                'ars_nouveau:drygmy_se'
            ],
            text: [Text.translate('ll8.info.ars_nouveau.capturing_drygmy_egg')]
        },
        {
            filter: [
                'ars_nouveau:drygmy_stone',
                'ars_nouveau:whirlisprig_flower',
                'ars_nouveau:wixie_cauldron'
            ],
            text: [Text.translate('ll8.info.ars_nouveau.charm_converts_block')]
        },
        {
            filter: [
                'ars_nouveau:familiar_amethyst_golem'
            ],
            text: [Text.translate('ll8.info.ars_nouveau.ritual_of_binding_golem')]
        },
        {
            filter: [
                'ars_nouveau:music_disc_aria_biblio',
                'ars_nouveau:music_disc_firel_the_wild_hunt',
                'ars_nouveau:music_disc_thistle_the_sound_of_glass'
            ],
            text: [Text.translate('ll8.info.ars_nouveau.dungeon_chest_rare_loot')]
        },
        {
            filter: [
                'ars_nouveau:starby_gift'
            ],
            text: [Text.translate('ll8.info.ars_nouveau.gift_starbuncle_gold_nugget')]
        },
        {
            filter: [
                'ars_technica:runic_spanner'
            ],
            text: [Text.translate('ll8.info.ars_technica.enchanting_apparatus_wrench')]
        },
        {
            filter: [
                'arsdelight:bowl_of_wilden_salad',
                'arsdelight:horn_roll'
            ],
            text: [Text.translate('ll8.info.arsdelight.serve_from_wilden_salad_feast')]
        },
        {
            filter: [
                'arseng:source_p2p_tunnel',
                'arseng:spell_p2p_tunnel'
            ],
            text: [Text.translate('ll8.info.arseng.attune_p2p_tunnel')]
        },
        {
            filter: [
                'ascended_quark:phoenix_flamerang'
            ],
            text: [Text.translate('ll8.info.ascended_quark.aether_dungeon_chest')]
        },
        {
            filter: [
                'ascended_quark:valkyrie_pickarang'
            ],
            text: [Text.translate('ll8.info.ascended_quark.valkyrie_loot_quest')]
        },
        {
            filter: [
                'bigreactors:blutonium_bucket',
                'bigreactors:cyanite_bucket',
                'bigreactors:magentite_bucket',
                'bigreactors:yellorium_bucket'
            ],
            text: [Text.translate('ll8.info.bigreactors.fluidizer_melt_ingot')]
        },
        {
            filter: [
                'bigreactors:cryomisi_bucket'
            ],
            text: [Text.translate('ll8.info.bigreactors.cryomisi')]
        },
        {
            filter: [
                'bigreactors:redfrigium_bucket'
            ],
            text: [Text.translate('ll8.info.bigreactors.redfrigium')]
        },
        {
            filter: [
                'bigreactors:rossinite_bucket'
            ],
            text: [Text.translate('ll8.info.bigreactors.reactor_waste_from_verderium')]
        },
        {
            filter: [
                'bigreactors:tangerium_bucket'
            ],
            text: [Text.translate('ll8.info.bigreactors.tangerium')]
        },
        {
            filter: [
                'bigreactors:verderium_bucket'
            ],
            text: [Text.translate('ll8.info.bigreactors.verderium')]
        },
        {
            filter: [
                'butchercraft:chicken_head'
            ],
            text: [Text.translate('ll8.info.butchercraft.chicken')]
        },
        {
            filter: [
                'butchercraft:cow_head',
                'butchercraft:goat_head',
                'butchercraft:pig_head',
                'butchercraft:sheep_head'
            ],
            text: [Text.translate('ll8.info.butchercraft.livestock')]
        },
        {
            filter: [
                'chemlib:phosphorus_dust'
            ],
            text: [Text.translate('ll8.info.chemlib.mine_with_ie_excavator')]
        },
        {
            filter: [
                'chickens:gas_egg'
            ],
            text: [Text.translate('ll8.info.chickens.loot_bundle_random_pick')]
        },
        {
            filter: [
                'crabbersdelight:coconut_helmet'
            ],
            text: [Text.translate('ll8.info.crabbersdelight.coconut_falls_on_head')]
        },
        {
            filter: [
                'crabbersdelight:crab_bucket'
            ],
            text: [Text.translate('ll8.info.crabbersdelight.bucket_crab')]
        },
        {
            filter: [
                'create:chest_minecart_contraption'
            ],
            text: [Text.translate('ll8.info.create.wrench_pickup_chest_cart')]
        },
        {
            filter: [
                'create:elevator_contact'
            ],
            text: [Text.translate('ll8.info.create.convert_contact_by_elevator')]
        },
        {
            filter: [
                'create:shopping_list'
            ],
            text: [Text.translate('ll8.info.create.shop_table_cloth')]
        },
        {
            filter: [
                'create_connected:music_disc_elevator',
                'create_connected:music_disc_interlude'
            ],
            text: [Text.translate('ll8.info.create_connected.creeper_killed_by_skeleton')]
        },
        {
            filter: [
                'create_enchantment_industry:apotheotic_essence_bucket'
            ],
            text: [Text.translate('ll8.info.create_enchantment_industry.mix_apotheosis_materials_fill_bucket')]
        },
        {
            filter: [
                'createaddition:bioethanol_bucket'
            ],
            text: [Text.translate('ll8.info.createaddition.bioethanol')]
        },
        {
            filter: [
                'createaddition:seed_oil_bucket'
            ],
            text: [Text.translate('ll8.info.createaddition.seed_oil')]
        },
        {
            filter: [
                'divinerpg:smoldering_tar_bucket'
            ],
            text: [Text.translate('ll8.info.divinerpg.fill_bucket_from_tar_lake')]
        },
        {
            filter: [
                'draconicevolution:p2p_dislocator',
                'draconicevolution:player_dislocator'
            ],
            text: [Text.translate('ll8.info.draconicevolution.bind_unbound_dislocator')]
        },
        {
            filter: [
                'dungeonsdelight:guardian_angel',
                'dungeonsdelight:monster_mousse',
                'dungeonsdelight:ossobuco',
                'dungeonsdelight:silverfish_and_chips'
            ],
            text: [Text.translate('ll8.info.dungeonsdelight.serve_from_feast_block')]
        },
        {
            filter: [
                'earthmobsmod:horn_flute'
            ],
            text: [Text.translate('ll8.info.earthmobsmod.horned_sheep_rams_block')]
        },
        {
            filter: [
                'enderio:silicon'
            ],
            text: [Text.translate('ll8.info.enderio.mystical_silicon_essence')]
        },
        {
            filter: [
                'enderio:xp_juice_bucket'
            ],
            text: [Text.translate('ll8.info.enderio.fill_from_xp_tank')]
        },
        {
            filter: [
                'energizedpower:liquid_xp_bucket'
            ],
            text: [Text.translate('ll8.info.energizedpower.fill_liquid_xp_in_fluid_filler')]
        },
        {
            filter: [
                'enigmaticlegacyplus:hell_blade_charm'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.nether_chest_after_low_health_combat')]
        },
        {
            filter: [
                'enigmaticlegacyplus:redemption_ring'
            ],
            text: [Text.translate('ll8.info.enigmaticlegacyplus.use_bless_stone_in_hardcore')]
        },
        {
            filter: [
                'eternal_starlight:budding_thioquartz'
            ],
            text: [Text.translate('ll8.info.eternal_starlight.mine_with_resonance')]
        },
        {
            filter: [
                'extended_industrialization:blazing_essence_bucket'
            ],
            text: [Text.translate('ll8.info.extended_industrialization.blast_furnace')]
        },
        {
            filter: [
                'extended_industrialization:composted_manure_bucket'
            ],
            text: [Text.translate('ll8.info.extended_industrialization.composter')]
        },
        {
            filter: [
                'extended_industrialization:distilled_water_bucket'
            ],
            text: [Text.translate('ll8.info.extended_industrialization.distillery')]
        },
        {
            filter: [
                'extended_industrialization:honey_bucket'
            ],
            text: [Text.translate('ll8.info.extended_industrialization.honey')]
        },
        {
            filter: [
                'extended_industrialization:manure_bucket'
            ],
            text: [Text.translate('ll8.info.extended_industrialization.waste_collector')]
        },
        {
            filter: [
                'extended_industrialization:phosphoric_acid_bucket'
            ],
            text: [Text.translate('ll8.info.extended_industrialization.react_phosphoric_acid')]
        },
        {
            filter: [
                'extended_industrialization:potassium_chloride_bucket'
            ],
            text: [Text.translate('ll8.info.extended_industrialization.react_potassium_chloride')]
        },
        {
            filter: [
                'extended_industrialization:potassium_hydroxide_bucket'
            ],
            text: [Text.translate('ll8.info.extended_industrialization.react_potassium_hydroxide')]
        },
        {
            filter: [
                'extended_industrialization:npk_fertilizer_bucket'
            ],
            text: [Text.translate('ll8.info.extended_industrialization.chemical_reactor')]
        },
        {
            filter: [
                'extendedae:package'
            ],
            text: [Text.translate('ll8.info.extendedae.pack_device_with_tape')]
        },
        {
            filter: [
                'forbidden_arcanus:boss_catcher'
            ],
            text: [Text.translate('ll8.info.forbidden_arcanus.boss_catcher')]
        },
        {
            filter: [
                'forbidden_arcanus:whirlwind_prism'
            ],
            text: [Text.translate('ll8.info.forbidden_arcanus.whirlwind_prism')]
        },
        {
            filter: [
                'frightsdelight:cobweb_lollipop',
                'frightsdelight:ghasttear_lollipop',
                'frightsdelight:rotten_flesh_lollipop',
                'frightsdelight:slimeapple_lollipop',
                'frightsdelight:soul_berry_lollipop',
                'frightsdelight:spidereye_lollipop',
                'frightsdelight:wither_berry_lollipop'
            ],
            text: [Text.translate('ll8.info.frightsdelight.lollipop_mold_harden')]
        },
        {
            filter: [
                'gag:energized_hearthstone'
            ],
            text: [Text.translate('ll8.info.gag.lightning_strikes_dropped_hearthstone')]
        },
        {
            filter: [
                'grotesque_steve:bloodline',
                'grotesque_steve:bloodlineleft',
                'grotesque_steve:camera',
                'grotesque_steve:grotesque_song_banjo',
                'grotesque_steve:itemgrotesquesteveguitab',
                'grotesque_steve:jeffreyshirt',
                'grotesque_steve:mailpaper',
                'grotesque_steve:meatpeak',
                'grotesque_steve:meatpicks_2',
                'grotesque_steve:nullblock',
                'grotesque_steve:nullitem',
                'grotesque_steve:spawn',
                'grotesque_steve:tv_2',
                'grotesque_steve:tv_3',
                'grotesque_steve:tv_4',
                'grotesque_steve:tvfly',
                'grotesque_steve:tvisabelle',
                'grotesque_steve:tvscream',
                'grotesque_steve:year_1shirt'
            ],
            text: [Text.translate('ll8.info.grotesque_steve.loot_bundle_random_roll')]
        },
        {
            filter: [
                'immersiveengineering:acetaldehyde_bucket'
            ],
            text: [Text.translate('ll8.info.immersiveengineering.acetaldehyde')]
        },
        {
            filter: [
                'immersiveengineering:biodiesel_bucket'
            ],
            text: [Text.translate('ll8.info.immersiveengineering.biodiesel')]
        },
        {
            filter: [
                'immersiveengineering:high_power_biodiesel_bucket'
            ],
            text: [Text.translate('ll8.info.immersiveengineering.high_cetane')]
        },
        {
            filter: [
                'immersiveengineering:logic_circuit'
            ],
            text: [Text.translate('ll8.info.immersiveengineering.circuit_table')]
        },
        {
            filter: [
                'immersiveengineering:phenolic_resin_bucket'
            ],
            text: [Text.translate('ll8.info.immersiveengineering.phenolic_resin')]
        },
        {
            filter: [
                'immersiveengineering:shader_bag_common',
                'immersiveengineering:shader_bag_uncommon'
            ],
            text: [Text.translate('ll8.info.immersiveengineering.outfitter_trade_or_downgrade')]
        },
        {
            filter: [
                'immersivepetroleum:diesel_sulfur_bucket',
                'immersivepetroleum:kerosene_bucket',
                'immersivepetroleum:lubricant_bucket',
                'immersivepetroleum:naphtha_bucket'
            ],
            text: [Text.translate('ll8.info.immersivepetroleum.distillation')]
        },
        {
            filter: [
                'immersivepetroleum:benzol_bucket'
            ],
            text: [Text.translate('ll8.info.immersivepetroleum.benzol')]
        },
        {
            filter: [
                'immersivepetroleum:diesel_bucket'
            ],
            text: [Text.translate('ll8.info.immersivepetroleum.hydrotreater')]
        },
        {
            filter: [
                'immersivepetroleum:petroleum_gas_bucket'
            ],
            text: [Text.translate('ll8.info.immersivepetroleum.petroleum_gas')]
        },
        {
            filter: [
                'immersivepetroleum:gasoline_bucket'
            ],
            text: [Text.translate('ll8.info.immersivepetroleum.gasoline')]
        },
        {
            filter: [
                'immersivepetroleum:molotov_lit'
            ],
            text: [Text.translate('ll8.info.immersivepetroleum.light_with_flint_and_steel')]
        },
        {
            filter: [
                'immersivepetroleum:napalm_bucket'
            ],
            text: [Text.translate('ll8.info.immersivepetroleum.napalm')]
        },
        {
            filter: [
                'integrateddynamics:bucket_menril_resin'
            ],
            text: [Text.translate('ll8.info.integrateddynamics.fill_bucket_from_squeezer')]
        },
        {
            filter: [
                'integrateddynamics:bucket_liquid_chorus'
            ],
            text: [Text.translate('ll8.info.integrateddynamics.liquid_chorus')]
        },
        {
            filter: [
                'justdirethings:refined_t2_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.justdirethings.t2')]
        },
        {
            filter: [
                'justdirethings:refined_t3_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.justdirethings.t3')]
        },
        {
            filter: [
                'justdirethings:refined_t4_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.justdirethings.t4')]
        },
        {
            filter: [
                'justdirethings:unrefined_t2_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.justdirethings.blaze_ember')]
        },
        {
            filter: [
                'justdirethings:unrefined_t3_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.justdirethings.voidflame')]
        },
        {
            filter: [
                'justdirethings:unrefined_t4_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.justdirethings.eclipse_ember')]
        },
        {
            filter: [
                'mcwholidays:couple_blue_stockings',
                'mcwholidays:couple_brown_stockings',
                'mcwholidays:couple_green_stockings',
                'mcwholidays:couple_red_stockings',
                'mcwholidays:couple_white_stockings'
            ],
            text: [Text.translate('ll8.info.mcwholidays.toggle_stocking_pair')]
        },
        {
            filter: [
                'mekanism:chlorine_bucket',
                'mekanism:ethene_bucket',
                'mekanism:hydrofluoric_acid_bucket',
                'mekanism:hydrogen_chloride_bucket',
                'mekanism:oxygen_bucket',
                'mekanism:sodium_bucket',
                'mekanism:steam_bucket',
                'mekanism:sulfur_dioxide_bucket',
                'mekanism:sulfur_trioxide_bucket',
                'mekanism:sulfuric_acid_bucket',
                'mekanism:superheated_sodium_bucket',
                'mekanism:uranium_hexafluoride_bucket',
                'mekanism:uranium_oxide_bucket'
            ],
            text: [Text.translate('ll8.info.mekanism.rotary_condense_to_bucket')]
        },
        {
            filter: [
                'mekanismgenerators:deuterium_bucket',
                'mekanismgenerators:fusion_fuel_bucket',
                'mekanismgenerators:tritium_bucket'
            ],
            text: [Text.translate('ll8.info.mekanismgenerators.fill_from_rotary_condensentrator')]
        },
        {
            filter: [
                'minecolonies:santa_hat'
            ],
            text: [Text.translate('ll8.info.minecolonies.bee_queen_christmas_trade')]
        },
        {
            filter: [
                'mob_grinding_utils:fluid_xp_bucket'
            ],
            text: [Text.translate('ll8.info.mob_grinding_utils.fill_bucket_from_xp_tank')]
        },
        {
            filter: [
                'mobflowutilities:glimmer_sprout',
                'mobflowutilities:gloom_spore'
            ],
            text: [Text.translate('ll8.info.mobflowutilities.drop_from_mobs_and_chests')]
        },
        {
            filter: [
                'modern_industrialization:acetylene_bucket',
                'modern_industrialization:benzene_bucket',
                'modern_industrialization:butadiene_bucket',
                'modern_industrialization:ethylbenzene_bucket',
                'modern_industrialization:ethylene_bucket',
                'modern_industrialization:methane_bucket',
                'modern_industrialization:propene_bucket',
                'modern_industrialization:toluene_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.distill_cracked_fractions')]
        },
        {
            filter: [
                'modern_industrialization:acrylic_acid_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.acrylic_acid')]
        },
        {
            filter: [
                'modern_industrialization:acrylic_glue_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.acrylic_glue')]
        },
        {
            filter: [
                'modern_industrialization:argon_bucket',
                'modern_industrialization:nitrogen_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.liquid_air')]
        },
        {
            filter: [
                'modern_industrialization:biodiesel_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.biodiesel')]
        },
        {
            filter: [
                'modern_industrialization:chlorine_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.chlorine')]
        },
        {
            filter: [
                'modern_industrialization:chromium_hydrochloric_solution_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.chromium_solution')]
        },
        {
            filter: [
                'modern_industrialization:crude_oil_bucket',
                'modern_industrialization:shale_oil_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.drill_in_oil_rig')]
        },
        {
            filter: [
                'modern_industrialization:cryofluid_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.freeze_into_cryofluid')]
        },
        {
            filter: [
                'modern_industrialization:diethyl_ether_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.diethyl_ether')]
        },
        {
            filter: [
                'modern_industrialization:ethanol_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.ethanol')]
        },
        {
            filter: [
                'modern_industrialization:heavy_fuel_bucket',
                'modern_industrialization:light_fuel_bucket',
                'modern_industrialization:naphtha_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.hydrotreat_in_chemical_reactor')]
        },
        {
            filter: [
                'modern_industrialization:helium_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.helium')]
        },
        {
            filter: [
                'modern_industrialization:helium_3_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.helium_3')]
        },
        {
            filter: [
                'modern_industrialization:helium_plasma_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.fusion_reactor_plasma')]
        },
        {
            filter: [
                'modern_industrialization:high_pressure_heavy_water_bucket',
                'modern_industrialization:high_pressure_heavy_water_steam_bucket',
                'modern_industrialization:high_pressure_steam_bucket',
                'modern_industrialization:high_pressure_water_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.pressurizer')]
        },
        {
            filter: [
                'modern_industrialization:hydrochloric_acid_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.hydrochloric_acid')]
        },
        {
            filter: [
                'modern_industrialization:hydrogen_bucket',
                'modern_industrialization:oxygen_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.water')]
        },
        {
            filter: [
                'modern_industrialization:lubricant_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.lubricant')]
        },
        {
            filter: [
                'modern_industrialization:manganese_sulfuric_solution_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.manganese_solution')]
        },
        {
            filter: [
                'modern_industrialization:molten_redstone_bucket',
                'modern_industrialization:soldering_alloy_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.melt')]
        },
        {
            filter: [
                'modern_industrialization:nylon_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.nylon')]
        },
        {
            filter: [
                'modern_industrialization:platinum_sulfuric_solution_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.platinum_solution')]
        },
        {
            filter: [
                'modern_industrialization:polyethylene_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.polyethylene')]
        },
        {
            filter: [
                'modern_industrialization:polyvinyl_chloride_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.polyvinyl_chloride')]
        },
        {
            filter: [
                'modern_industrialization:raw_biodiesel_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.raw_biodiesel')]
        },
        {
            filter: [
                'modern_industrialization:raw_synthetic_oil_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.raw_synthetic_oil')]
        },
        {
            filter: [
                'modern_industrialization:sodium_hydroxide_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.sodium_hydroxide')]
        },
        {
            filter: [
                'modern_industrialization:styrene_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.styrene')]
        },
        {
            filter: [
                'modern_industrialization:styrene_butadiene_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.styrene_butadiene')]
        },
        {
            filter: [
                'modern_industrialization:styrene_butadiene_rubber_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.styrene_butadiene_rubber')]
        },
        {
            filter: [
                'modern_industrialization:sugar_solution_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.sugar_solution')]
        },
        {
            filter: [
                'modern_industrialization:sulfuric_acid_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.sulfuric_acid')]
        },
        {
            filter: [
                'modern_industrialization:sulfuric_heavy_fuel_bucket',
                'modern_industrialization:sulfuric_light_fuel_bucket',
                'modern_industrialization:sulfuric_naphtha_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.distill_crude_oil')]
        },
        {
            filter: [
                'modern_industrialization:sulfuric_crude_oil_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.distill_shale_oil')]
        },
        {
            filter: [
                'modern_industrialization:synthetic_oil_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.synthetic_oil')]
        },
        {
            filter: [
                'modern_industrialization:uu_matter_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.uu_matter')]
        },
        {
            filter: [
                'modern_industrialization:vinyl_chloride_bucket'
            ],
            text: [Text.translate('ll8.info.modern_industrialization.vinyl_chloride')]
        },
        {
            filter: [
                'mynethersdelight:roast_ear'
            ],
            text: [Text.translate('ll8.info.mynethersdelight.knife_on_stuffed_hoglin')]
        },
        {
            filter: [
                'mythsandlegends:gargoyle_effigy'
            ],
            text: [Text.translate('ll8.info.mythsandlegends.assemble_in_stone_sanctum')]
        },
        {
            filter: [
                'naturalist:butterfly',
                'naturalist:caterpillar',
                'naturalist:crab',
                'naturalist:scorpion',
                'naturalist:snail'
            ],
            text: [Text.translate('ll8.info.naturalist.catch_with_capture_net')]
        },
        {
            filter: [
                'naturalist:hedgehog',
                'naturalist:rat'
            ],
            text: [Text.translate('ll8.info.naturalist.tame_then_catch_with_net')]
        },
        {
            filter: [
                'oritech:still_heavy_oil_bucket'
            ],
            text: [Text.translate('ll8.info.oritech.refinery')]
        },
        {
            filter: [
                'oritech:still_diesel_bucket'
            ],
            text: [Text.translate('ll8.info.oritech.refinery_diesel')]
        },
        {
            filter: [
                'oritech:still_silicon_wash_bucket'
            ],
            text: [Text.translate('ll8.info.oritech.centrifuge')]
        },
        {
            filter: [
                'oritech:still_mineral_slurry_bucket'
            ],
            text: [Text.translate('ll8.info.oritech.centrifuge_mineral_slurry')]
        },
        {
            filter: [
                'oritech:still_molten_adamant_bucket',
                'oritech:still_molten_biosteel_bucket',
                'oritech:still_molten_duratium_bucket',
                'oritech:still_molten_energite_bucket',
                'oritech:still_molten_fluxite_bucket'
            ],
            text: [Text.translate('ll8.info.oritech.melt_in_metalworks_foundry')]
        },
        {
            filter: [
                'oritech:still_steam_bucket'
            ],
            text: [Text.translate('ll8.info.oritech.fill_from_steam_boiler')]
        },
        {
            filter: [
                'packagedauto:package'
            ],
            text: [Text.translate('ll8.info.packagedauto.made_in_packager')]
        },
        {
            filter: [
                'packagedauto:volume_package'
            ],
            text: [Text.translate('ll8.info.packagedauto.made_in_fluid_package_filler')]
        },
        {
            filter: [
                'pneumaticcraft:biodiesel_bucket'
            ],
            text: [Text.translate('ll8.info.pneumaticcraft.fill_from_fluid_mixer')]
        },
        {
            filter: [
                'pneumaticcraft:diesel_bucket',
                'pneumaticcraft:gasoline_bucket',
                'pneumaticcraft:kerosene_bucket',
                'pneumaticcraft:lpg_bucket'
            ],
            text: [Text.translate('ll8.info.pneumaticcraft.fill_from_refinery')]
        },
        {
            filter: [
                'pneumaticcraft:ethanol_bucket'
            ],
            text: [Text.translate('ll8.info.pneumaticcraft.ethanol')]
        },
        {
            filter: [
                'pneumaticcraft:lubricant_bucket'
            ],
            text: [Text.translate('ll8.info.pneumaticcraft.lubricant')]
        },
        {
            filter: [
                'pneumaticcraft:vegetable_oil_bucket'
            ],
            text: [Text.translate('ll8.info.pneumaticcraft.vegetable_oil')]
        },
        {
            filter: [
                'pneumaticcraft:yeast_culture_bucket'
            ],
            text: [Text.translate('ll8.info.pneumaticcraft.brew_yeast_culture')]
        },
        {
            filter: [
                'potionbundles:lingering_potion_bundle',
                'potionbundles:potion_bundle',
                'potionbundles:splash_potion_bundle'
            ],
            text: [Text.translate('ll8.info.potionbundles.craft_special_bundle')]
        },
        {
            filter: [
                'productivebees:spawn_egg_collector_bee',
                'productivebees:spawn_egg_dye_bee',
                'productivebees:spawn_egg_lumber_bee'
            ],
            text: [Text.translate('ll8.info.productivebees.beekeeper_master_trade')]
        },
        {
            filter: [
                'productivemetalworks:molten_brass_bucket',
                'productivemetalworks:molten_bronze_bucket',
                'productivemetalworks:molten_constantan_bucket',
                'productivemetalworks:molten_electrum_bucket',
                'productivemetalworks:molten_enderium_bucket',
                'productivemetalworks:molten_invar_bucket',
                'productivemetalworks:molten_lumium_bucket',
                'productivemetalworks:molten_magma_cream_bucket',
                'productivemetalworks:molten_netherite_bucket',
                'productivemetalworks:molten_refined_glowstone_bucket',
                'productivemetalworks:molten_refined_obsidian_bucket',
                'productivemetalworks:molten_signalum_bucket',
                'productivemetalworks:molten_steel_bucket'
            ],
            text: [Text.translate('ll8.info.productivemetalworks.alloy')]
        },
        {
            filter: [
                'productivemetalworks:molten_obsidian_bucket'
            ],
            text: [Text.translate('ll8.info.productivemetalworks.obsidian')]
        },
        {
            filter: [
                'productivetrees:cork'
            ],
            text: [Text.translate('ll8.info.productivetrees.strip_cork_oak_log')]
        },
        {
            filter: [
                'psi:flash_ring_active'
            ],
            text: [Text.translate('ll8.info.psi.program_flash_ring')]
        },
        {
            filter: [
                'psi:spell_bullet_active',
                'psi:spell_bullet_charge_active',
                'psi:spell_bullet_circle_active',
                'psi:spell_bullet_grenade_active',
                'psi:spell_bullet_loop_active',
                'psi:spell_bullet_mine_active',
                'psi:spell_bullet_projectile_active'
            ],
            text: [Text.translate('ll8.info.psi.program_bullet_at_spell_programmer')]
        },
        {
            filter: [
                'quark:cloud'
            ],
            text: [Text.translate('ll8.info.quark.fill_bottle_in_cloud_layer')]
        },
        {
            filter: [
                'relics:cut_glass_boot'
            ],
            text: [Text.translate('ll8.info.relics.chest_loot_water_biome')]
        },
        {
            filter: [
                'relics:leafy_mantle'
            ],
            text: [Text.translate('ll8.info.relics.chest_loot_forest_biome')]
        },
        {
            filter: [
                'relics:pet_bone'
            ],
            text: [Text.translate('ll8.info.relics.drop_from_dead_pet')]
        },
        {
            filter: [
                'reliquary:potion',
                'reliquary:splash_potion'
            ],
            text: [Text.translate('ll8.info.reliquary.boil_in_apothecary_cauldron')]
        },
        {
            filter: [
                'reliquary:potion_essence'
            ],
            text: [Text.translate('ll8.info.reliquary.grind_in_apothecary_mortar')]
        },
        {
            filter: [
                'rftoolsutility:tablet_redstone',
                'rftoolsutility:tablet_screen'
            ],
            text: [Text.translate('ll8.info.rftoolsutility.install_module_in_tablet')]
        },
        {
            filter: [
                'securitycraft:bucket_f_lava',
                'securitycraft:bucket_f_water'
            ],
            text: [Text.translate('ll8.info.securitycraft.brew_in_brewing_stand')]
        },
        {
            filter: [
                'securitycraft:colored_lens'
            ],
            text: [Text.translate('ll8.info.securitycraft.craft_from_stained_panes')]
        },
        {
            filter: [
                'sfm:form'
            ],
            text: [Text.translate('ll8.info.sfm.anvil_on_iron_block')]
        },
        {
            filter: [
                'silentgear:paint'
            ],
            text: [Text.translate('ll8.info.silentgear.made_in_paint_mixer')]
        },
        {
            filter: [
                'snowyspirit:sled_birch'
            ],
            text: [Text.translate('ll8.info.snowyspirit.runtime_generated_recipe')]
        },
        {
            filter: [
                'sophisticatedcore:xp_bucket'
            ],
            text: [Text.translate('ll8.info.sophisticatedcore.fill_bucket_from_xp_tank')]
        },
        {
            filter: [
                'stevescarts:modularcart'
            ],
            text: [Text.translate('ll8.info.stevescarts.cart_assembler')]
        },
        {
            filter: [
                'thavma:node_jar'
            ],
            text: [Text.translate('ll8.info.thavma.contain_aura_node')]
        },
        {
            filter: [
                'thavma:research_scroll'
            ],
            text: [Text.translate('ll8.info.thavma.click_book_entry')]
        },
        {
            filter: [
                'the_bumblezone:music_disc_a_last_first_last',
                'the_bumblezone:music_disc_bee_ware_of_the_temple',
                'the_bumblezone:music_disc_beenna_box',
                'the_bumblezone:music_disc_drowning_in_despair',
                'the_bumblezone:music_disc_knowing_renren',
                'the_bumblezone:music_disc_life_renren',
                'the_bumblezone:music_disc_radiance_renren'
            ],
            text: [Text.translate('ll8.info.the_bumblezone.music_disc_sources')]
        },
        {
            filter: [
                'the_bumblezone:music_disc_rivers_of_honey_moserao'
            ],
            text: [Text.translate('ll8.info.the_bumblezone.music_disc_rivers_of_honey_sources')]
        },
        {
            filter: [
                'touhou_little_maid:garage_kit'
            ],
            text: [Text.translate('ll8.info.touhou_little_maid.roast_tiny_statue')]
        },
        {
            filter: [
                'touhou_little_maid_spell:hairpin'
            ],
            text: [Text.translate('ll8.info.touhou_little_maid_spell.hidden_retreat_barrel')]
        },
        {
            filter: [
                'ufo:astral_nexus_boots',
                'ufo:astral_nexus_helmet',
                'ufo:astral_nexus_leggings',
                'ufo:reality_ripper',
                'ufo:scar'
            ],
            text: [Text.translate('ll8.info.ufo.open_loot_bundle')]
        },
        {
            filter: [
                'ufo:stable_coolant_bucket'
            ],
            text: [Text.translate('ll8.info.ufo.fill_from_me_network')]
        },
        {
            filter: [
                'umbral_skies:phantom_gloves'
            ],
            text: [Text.translate('ll8.info.umbral_skies.knight_phantom_boss_loot')]
        },
        {
            filter: [
                'undergarden:music_disc_limax_maximus'
            ],
            text: [Text.translate('ll8.info.undergarden.trade_stoneborn')]
        },
        {
            filter: [
                'undergarden:virulent_mix_bucket'
            ],
            text: [Text.translate('ll8.info.undergarden.fill_bucket_virulent_mix')]
        },
        {
            filter: [
                'waystones:attuned_shard'
            ],
            text: [Text.translate('ll8.info.waystones.attune_on_warp_plate')]
        },
        {
            filter: [
                'wildernature:blunderbuss'
            ],
            text: [Text.translate('ll8.info.wildernature.blunderbuss')]
        },
        {
            filter: [
                'wildernature:field_guide'
            ],
            text: [Text.translate('ll8.info.wildernature.guild_commission_explore_reward')]
        },
        {
            filter: [
                'wildernature:stylin_purple_hat'
            ],
            text: [Text.translate('ll8.info.wildernature.stylin_purple_hat')]
        },
        {
            filter: [
                'wildernature:fur_cloak'
            ],
            text: [Text.translate('ll8.info.wildernature.fur_cloak')]
        },
        {
            filter: [
                'woot_revived:enchanted_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.woot_revived.enchanted')]
        },
        {
            filter: [
                'woot_revived:mob_tears_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.woot_revived.mob_tears')]
        },
        {
            filter: [
                'woot_revived:pure_dye_fluid_bucket'
            ],
            text: [Text.translate('ll8.info.woot_revived.pure_dye')]
        },
        {
            filter: [
                'createcasing:andesite_encased_acacia_cogwheel',
                'createcasing:andesite_encased_acacia_large_cogwheel',
                'createcasing:andesite_encased_acacia_shaft',
                'createcasing:andesite_encased_andesite_cogwheel',
                'createcasing:andesite_encased_andesite_large_cogwheel',
                'createcasing:andesite_encased_bamboo_cogwheel',
                'createcasing:andesite_encased_bamboo_large_cogwheel',
                'createcasing:andesite_encased_bamboo_shaft',
                'createcasing:andesite_encased_birch_cogwheel',
                'createcasing:andesite_encased_birch_large_cogwheel',
                'createcasing:andesite_encased_birch_shaft',
                'createcasing:andesite_encased_brass_cogwheel',
                'createcasing:andesite_encased_brass_large_cogwheel',
                'createcasing:andesite_encased_brass_shaft',
                'createcasing:andesite_encased_cherry_cogwheel',
                'createcasing:andesite_encased_cherry_large_cogwheel',
                'createcasing:andesite_encased_cherry_shaft',
                'createcasing:andesite_encased_copper_cogwheel',
                'createcasing:andesite_encased_copper_large_cogwheel',
                'createcasing:andesite_encased_copper_shaft',
                'createcasing:andesite_encased_crimson_cogwheel',
                'createcasing:andesite_encased_crimson_large_cogwheel',
                'createcasing:andesite_encased_crimson_shaft',
                'createcasing:andesite_encased_dark_oak_cogwheel',
                'createcasing:andesite_encased_dark_oak_large_cogwheel',
                'createcasing:andesite_encased_dark_oak_shaft',
                'createcasing:andesite_encased_glass_shaft',
                'createcasing:andesite_encased_jungle_cogwheel',
                'createcasing:andesite_encased_jungle_large_cogwheel',
                'createcasing:andesite_encased_jungle_shaft',
                'createcasing:andesite_encased_mangrove_cogwheel',
                'createcasing:andesite_encased_mangrove_large_cogwheel',
                'createcasing:andesite_encased_mangrove_shaft',
                'createcasing:andesite_encased_mldeg_shaft',
                'createcasing:andesite_encased_oak_cogwheel',
                'createcasing:andesite_encased_oak_large_cogwheel',
                'createcasing:andesite_encased_oak_shaft',
                'createcasing:andesite_encased_spruce_shaft',
                'createcasing:andesite_encased_warped_cogwheel',
                'createcasing:andesite_encased_warped_large_cogwheel',
                'createcasing:andesite_encased_warped_shaft',
                'createcasing:andesite_encased_zinc_cogwheel',
                'createcasing:andesite_encased_zinc_large_cogwheel',
                'createcasing:andesite_encased_zinc_shaft',
                'createcasing:brass_encased_acacia_cogwheel',
                'createcasing:brass_encased_acacia_large_cogwheel',
                'createcasing:brass_encased_acacia_shaft',
                'createcasing:brass_encased_andesite_cogwheel',
                'createcasing:brass_encased_andesite_large_cogwheel',
                'createcasing:brass_encased_bamboo_cogwheel',
                'createcasing:brass_encased_bamboo_large_cogwheel',
                'createcasing:brass_encased_bamboo_shaft',
                'createcasing:brass_encased_birch_cogwheel',
                'createcasing:brass_encased_birch_large_cogwheel',
                'createcasing:brass_encased_birch_shaft',
                'createcasing:brass_encased_brass_cogwheel',
                'createcasing:brass_encased_brass_large_cogwheel',
                'createcasing:brass_encased_brass_shaft',
                'createcasing:brass_encased_cherry_cogwheel',
                'createcasing:brass_encased_cherry_large_cogwheel',
                'createcasing:brass_encased_cherry_shaft',
                'createcasing:brass_encased_copper_cogwheel',
                'createcasing:brass_encased_copper_large_cogwheel',
                'createcasing:brass_encased_copper_shaft',
                'createcasing:brass_encased_crimson_cogwheel',
                'createcasing:brass_encased_crimson_large_cogwheel',
                'createcasing:brass_encased_crimson_shaft',
                'createcasing:brass_encased_dark_oak_cogwheel',
                'createcasing:brass_encased_dark_oak_large_cogwheel',
                'createcasing:brass_encased_dark_oak_shaft',
                'createcasing:brass_encased_glass_shaft',
                'createcasing:brass_encased_jungle_cogwheel',
                'createcasing:brass_encased_jungle_large_cogwheel',
                'createcasing:brass_encased_jungle_shaft',
                'createcasing:brass_encased_mangrove_cogwheel',
                'createcasing:brass_encased_mangrove_large_cogwheel',
                'createcasing:brass_encased_mangrove_shaft',
                'createcasing:brass_encased_mldeg_shaft',
                'createcasing:brass_encased_oak_cogwheel',
                'createcasing:brass_encased_oak_large_cogwheel',
                'createcasing:brass_encased_oak_shaft',
                'createcasing:brass_encased_spruce_shaft',
                'createcasing:brass_encased_warped_cogwheel',
                'createcasing:brass_encased_warped_large_cogwheel',
                'createcasing:brass_encased_warped_shaft',
                'createcasing:brass_encased_zinc_cogwheel',
                'createcasing:brass_encased_zinc_large_cogwheel',
                'createcasing:brass_encased_zinc_shaft',
                'createcasing:copper_encased_acacia_cogwheel',
                'createcasing:copper_encased_acacia_large_cogwheel',
                'createcasing:copper_encased_acacia_shaft',
                'createcasing:copper_encased_andesite_cogwheel',
                'createcasing:copper_encased_andesite_large_cogwheel',
                'createcasing:copper_encased_bamboo_cogwheel',
                'createcasing:copper_encased_bamboo_large_cogwheel',
                'createcasing:copper_encased_bamboo_shaft',
                'createcasing:copper_encased_birch_cogwheel',
                'createcasing:copper_encased_birch_large_cogwheel',
                'createcasing:copper_encased_birch_shaft',
                'createcasing:copper_encased_brass_cogwheel',
                'createcasing:copper_encased_brass_large_cogwheel',
                'createcasing:copper_encased_brass_shaft',
                'createcasing:copper_encased_cherry_cogwheel',
                'createcasing:copper_encased_cherry_large_cogwheel',
                'createcasing:copper_encased_cherry_shaft',
                'createcasing:copper_encased_cogwheel',
                'createcasing:copper_encased_copper_cogwheel',
                'createcasing:copper_encased_copper_large_cogwheel',
                'createcasing:copper_encased_copper_shaft',
                'createcasing:copper_encased_crimson_cogwheel',
                'createcasing:copper_encased_crimson_large_cogwheel',
                'createcasing:copper_encased_crimson_shaft',
                'createcasing:copper_encased_dark_oak_cogwheel',
                'createcasing:copper_encased_dark_oak_large_cogwheel',
                'createcasing:copper_encased_dark_oak_shaft',
                'createcasing:copper_encased_glass_shaft',
                'createcasing:copper_encased_jungle_cogwheel',
                'createcasing:copper_encased_jungle_large_cogwheel',
                'createcasing:copper_encased_jungle_shaft',
                'createcasing:copper_encased_large_cogwheel',
                'createcasing:copper_encased_mangrove_cogwheel',
                'createcasing:copper_encased_mangrove_large_cogwheel',
                'createcasing:copper_encased_mangrove_shaft',
                'createcasing:copper_encased_mldeg_shaft',
                'createcasing:copper_encased_oak_cogwheel',
                'createcasing:copper_encased_oak_large_cogwheel',
                'createcasing:copper_encased_oak_shaft',
                'createcasing:copper_encased_shaft',
                'createcasing:copper_encased_spruce_shaft',
                'createcasing:copper_encased_warped_cogwheel',
                'createcasing:copper_encased_warped_large_cogwheel',
                'createcasing:copper_encased_warped_shaft',
                'createcasing:copper_encased_zinc_cogwheel',
                'createcasing:copper_encased_zinc_large_cogwheel',
                'createcasing:copper_encased_zinc_shaft',
                'createcasing:creative_encased_acacia_cogwheel',
                'createcasing:creative_encased_acacia_large_cogwheel',
                'createcasing:creative_encased_acacia_shaft',
                'createcasing:creative_encased_andesite_cogwheel',
                'createcasing:creative_encased_andesite_large_cogwheel',
                'createcasing:creative_encased_bamboo_cogwheel',
                'createcasing:creative_encased_bamboo_large_cogwheel',
                'createcasing:creative_encased_bamboo_shaft',
                'createcasing:creative_encased_birch_cogwheel',
                'createcasing:creative_encased_birch_large_cogwheel',
                'createcasing:creative_encased_birch_shaft',
                'createcasing:creative_encased_brass_cogwheel',
                'createcasing:creative_encased_brass_large_cogwheel',
                'createcasing:creative_encased_brass_shaft',
                'createcasing:creative_encased_cherry_cogwheel',
                'createcasing:creative_encased_cherry_large_cogwheel',
                'createcasing:creative_encased_cherry_shaft',
                'createcasing:creative_encased_cogwheel',
                'createcasing:creative_encased_copper_cogwheel',
                'createcasing:creative_encased_copper_large_cogwheel',
                'createcasing:creative_encased_copper_shaft',
                'createcasing:creative_encased_crimson_cogwheel',
                'createcasing:creative_encased_crimson_large_cogwheel',
                'createcasing:creative_encased_crimson_shaft',
                'createcasing:creative_encased_dark_oak_cogwheel',
                'createcasing:creative_encased_dark_oak_large_cogwheel',
                'createcasing:creative_encased_dark_oak_shaft',
                'createcasing:creative_encased_glass_shaft',
                'createcasing:creative_encased_jungle_cogwheel',
                'createcasing:creative_encased_jungle_large_cogwheel',
                'createcasing:creative_encased_jungle_shaft',
                'createcasing:creative_encased_large_cogwheel',
                'createcasing:creative_encased_mangrove_cogwheel',
                'createcasing:creative_encased_mangrove_large_cogwheel',
                'createcasing:creative_encased_mangrove_shaft',
                'createcasing:creative_encased_mldeg_shaft',
                'createcasing:creative_encased_oak_cogwheel',
                'createcasing:creative_encased_oak_large_cogwheel',
                'createcasing:creative_encased_oak_shaft',
                'createcasing:creative_encased_shaft',
                'createcasing:creative_encased_spruce_shaft',
                'createcasing:creative_encased_warped_cogwheel',
                'createcasing:creative_encased_warped_large_cogwheel',
                'createcasing:creative_encased_warped_shaft',
                'createcasing:creative_encased_zinc_cogwheel',
                'createcasing:creative_encased_zinc_large_cogwheel',
                'createcasing:creative_encased_zinc_shaft',
                'createcasing:industrial_iron_encased_acacia_cogwheel',
                'createcasing:industrial_iron_encased_acacia_large_cogwheel',
                'createcasing:industrial_iron_encased_acacia_shaft',
                'createcasing:industrial_iron_encased_andesite_cogwheel',
                'createcasing:industrial_iron_encased_andesite_large_cogwheel',
                'createcasing:industrial_iron_encased_bamboo_cogwheel',
                'createcasing:industrial_iron_encased_bamboo_large_cogwheel',
                'createcasing:industrial_iron_encased_bamboo_shaft',
                'createcasing:industrial_iron_encased_birch_cogwheel',
                'createcasing:industrial_iron_encased_birch_large_cogwheel',
                'createcasing:industrial_iron_encased_birch_shaft',
                'createcasing:industrial_iron_encased_brass_cogwheel',
                'createcasing:industrial_iron_encased_brass_large_cogwheel',
                'createcasing:industrial_iron_encased_brass_shaft',
                'createcasing:industrial_iron_encased_cherry_cogwheel',
                'createcasing:industrial_iron_encased_cherry_large_cogwheel',
                'createcasing:industrial_iron_encased_cherry_shaft',
                'createcasing:industrial_iron_encased_cogwheel',
                'createcasing:industrial_iron_encased_copper_cogwheel',
                'createcasing:industrial_iron_encased_copper_large_cogwheel',
                'createcasing:industrial_iron_encased_copper_shaft',
                'createcasing:industrial_iron_encased_crimson_cogwheel',
                'createcasing:industrial_iron_encased_crimson_large_cogwheel',
                'createcasing:industrial_iron_encased_crimson_shaft',
                'createcasing:industrial_iron_encased_dark_oak_cogwheel',
                'createcasing:industrial_iron_encased_dark_oak_large_cogwheel',
                'createcasing:industrial_iron_encased_dark_oak_shaft',
                'createcasing:industrial_iron_encased_glass_shaft',
                'createcasing:industrial_iron_encased_jungle_cogwheel',
                'createcasing:industrial_iron_encased_jungle_large_cogwheel',
                'createcasing:industrial_iron_encased_jungle_shaft',
                'createcasing:industrial_iron_encased_large_cogwheel',
                'createcasing:industrial_iron_encased_mangrove_cogwheel',
                'createcasing:industrial_iron_encased_mangrove_large_cogwheel',
                'createcasing:industrial_iron_encased_mangrove_shaft',
                'createcasing:industrial_iron_encased_mldeg_shaft',
                'createcasing:industrial_iron_encased_oak_cogwheel',
                'createcasing:industrial_iron_encased_oak_large_cogwheel',
                'createcasing:industrial_iron_encased_oak_shaft',
                'createcasing:industrial_iron_encased_shaft',
                'createcasing:industrial_iron_encased_spruce_shaft',
                'createcasing:industrial_iron_encased_warped_cogwheel',
                'createcasing:industrial_iron_encased_warped_large_cogwheel',
                'createcasing:industrial_iron_encased_warped_shaft',
                'createcasing:industrial_iron_encased_zinc_cogwheel',
                'createcasing:industrial_iron_encased_zinc_large_cogwheel',
                'createcasing:industrial_iron_encased_zinc_shaft',
                'createcasing:railway_encased_acacia_cogwheel',
                'createcasing:railway_encased_acacia_large_cogwheel',
                'createcasing:railway_encased_acacia_shaft',
                'createcasing:railway_encased_andesite_cogwheel',
                'createcasing:railway_encased_andesite_large_cogwheel',
                'createcasing:railway_encased_bamboo_cogwheel',
                'createcasing:railway_encased_bamboo_large_cogwheel',
                'createcasing:railway_encased_bamboo_shaft',
                'createcasing:railway_encased_birch_cogwheel',
                'createcasing:railway_encased_birch_large_cogwheel',
                'createcasing:railway_encased_birch_shaft',
                'createcasing:railway_encased_brass_cogwheel',
                'createcasing:railway_encased_brass_large_cogwheel',
                'createcasing:railway_encased_brass_shaft',
                'createcasing:railway_encased_cherry_cogwheel',
                'createcasing:railway_encased_cherry_large_cogwheel',
                'createcasing:railway_encased_cherry_shaft',
                'createcasing:railway_encased_cogwheel',
                'createcasing:railway_encased_copper_cogwheel',
                'createcasing:railway_encased_copper_large_cogwheel',
                'createcasing:railway_encased_copper_shaft',
                'createcasing:railway_encased_crimson_cogwheel',
                'createcasing:railway_encased_crimson_large_cogwheel',
                'createcasing:railway_encased_crimson_shaft',
                'createcasing:railway_encased_dark_oak_cogwheel',
                'createcasing:railway_encased_dark_oak_large_cogwheel',
                'createcasing:railway_encased_dark_oak_shaft',
                'createcasing:railway_encased_glass_shaft',
                'createcasing:railway_encased_jungle_cogwheel',
                'createcasing:railway_encased_jungle_large_cogwheel',
                'createcasing:railway_encased_jungle_shaft',
                'createcasing:railway_encased_large_cogwheel',
                'createcasing:railway_encased_mangrove_cogwheel',
                'createcasing:railway_encased_mangrove_large_cogwheel',
                'createcasing:railway_encased_mangrove_shaft',
                'createcasing:railway_encased_mldeg_shaft',
                'createcasing:railway_encased_oak_cogwheel',
                'createcasing:railway_encased_oak_large_cogwheel',
                'createcasing:railway_encased_oak_shaft',
                'createcasing:railway_encased_shaft',
                'createcasing:railway_encased_spruce_shaft',
                'createcasing:railway_encased_warped_cogwheel',
                'createcasing:railway_encased_warped_large_cogwheel',
                'createcasing:railway_encased_warped_shaft',
                'createcasing:railway_encased_zinc_cogwheel',
                'createcasing:railway_encased_zinc_large_cogwheel',
                'createcasing:railway_encased_zinc_shaft',
                'createcasing:refined_radiance_encased_acacia_cogwheel',
                'createcasing:refined_radiance_encased_acacia_large_cogwheel',
                'createcasing:refined_radiance_encased_acacia_shaft',
                'createcasing:refined_radiance_encased_andesite_cogwheel',
                'createcasing:refined_radiance_encased_andesite_large_cogwheel',
                'createcasing:refined_radiance_encased_bamboo_cogwheel',
                'createcasing:refined_radiance_encased_bamboo_large_cogwheel',
                'createcasing:refined_radiance_encased_bamboo_shaft',
                'createcasing:refined_radiance_encased_birch_cogwheel',
                'createcasing:refined_radiance_encased_birch_large_cogwheel',
                'createcasing:refined_radiance_encased_birch_shaft',
                'createcasing:refined_radiance_encased_brass_cogwheel',
                'createcasing:refined_radiance_encased_brass_large_cogwheel',
                'createcasing:refined_radiance_encased_brass_shaft',
                'createcasing:refined_radiance_encased_cherry_cogwheel',
                'createcasing:refined_radiance_encased_cherry_large_cogwheel',
                'createcasing:refined_radiance_encased_cherry_shaft',
                'createcasing:refined_radiance_encased_cogwheel',
                'createcasing:refined_radiance_encased_copper_cogwheel',
                'createcasing:refined_radiance_encased_copper_large_cogwheel',
                'createcasing:refined_radiance_encased_copper_shaft',
                'createcasing:refined_radiance_encased_crimson_cogwheel',
                'createcasing:refined_radiance_encased_crimson_large_cogwheel',
                'createcasing:refined_radiance_encased_crimson_shaft',
                'createcasing:refined_radiance_encased_dark_oak_cogwheel',
                'createcasing:refined_radiance_encased_dark_oak_large_cogwheel',
                'createcasing:refined_radiance_encased_dark_oak_shaft',
                'createcasing:refined_radiance_encased_glass_shaft',
                'createcasing:refined_radiance_encased_jungle_cogwheel',
                'createcasing:refined_radiance_encased_jungle_large_cogwheel',
                'createcasing:refined_radiance_encased_jungle_shaft',
                'createcasing:refined_radiance_encased_large_cogwheel',
                'createcasing:refined_radiance_encased_mangrove_cogwheel',
                'createcasing:refined_radiance_encased_mangrove_large_cogwheel',
                'createcasing:refined_radiance_encased_mangrove_shaft',
                'createcasing:refined_radiance_encased_mldeg_shaft',
                'createcasing:refined_radiance_encased_oak_cogwheel',
                'createcasing:refined_radiance_encased_oak_large_cogwheel',
                'createcasing:refined_radiance_encased_oak_shaft',
                'createcasing:refined_radiance_encased_shaft',
                'createcasing:refined_radiance_encased_spruce_shaft',
                'createcasing:refined_radiance_encased_warped_cogwheel',
                'createcasing:refined_radiance_encased_warped_large_cogwheel',
                'createcasing:refined_radiance_encased_warped_shaft',
                'createcasing:refined_radiance_encased_zinc_cogwheel',
                'createcasing:refined_radiance_encased_zinc_large_cogwheel',
                'createcasing:refined_radiance_encased_zinc_shaft',
                'createcasing:shadow_steel_encased_acacia_cogwheel',
                'createcasing:shadow_steel_encased_acacia_large_cogwheel',
                'createcasing:shadow_steel_encased_acacia_shaft',
                'createcasing:shadow_steel_encased_andesite_cogwheel',
                'createcasing:shadow_steel_encased_andesite_large_cogwheel',
                'createcasing:shadow_steel_encased_bamboo_cogwheel',
                'createcasing:shadow_steel_encased_bamboo_large_cogwheel',
                'createcasing:shadow_steel_encased_bamboo_shaft',
                'createcasing:shadow_steel_encased_birch_cogwheel',
                'createcasing:shadow_steel_encased_birch_large_cogwheel',
                'createcasing:shadow_steel_encased_birch_shaft',
                'createcasing:shadow_steel_encased_brass_cogwheel',
                'createcasing:shadow_steel_encased_brass_large_cogwheel',
                'createcasing:shadow_steel_encased_brass_shaft',
                'createcasing:shadow_steel_encased_cherry_cogwheel',
                'createcasing:shadow_steel_encased_cherry_large_cogwheel',
                'createcasing:shadow_steel_encased_cherry_shaft',
                'createcasing:shadow_steel_encased_cogwheel',
                'createcasing:shadow_steel_encased_copper_cogwheel',
                'createcasing:shadow_steel_encased_copper_large_cogwheel',
                'createcasing:shadow_steel_encased_copper_shaft',
                'createcasing:shadow_steel_encased_crimson_cogwheel',
                'createcasing:shadow_steel_encased_crimson_large_cogwheel',
                'createcasing:shadow_steel_encased_crimson_shaft',
                'createcasing:shadow_steel_encased_dark_oak_cogwheel',
                'createcasing:shadow_steel_encased_dark_oak_large_cogwheel',
                'createcasing:shadow_steel_encased_dark_oak_shaft',
                'createcasing:shadow_steel_encased_glass_shaft',
                'createcasing:shadow_steel_encased_jungle_cogwheel',
                'createcasing:shadow_steel_encased_jungle_large_cogwheel',
                'createcasing:shadow_steel_encased_jungle_shaft',
                'createcasing:shadow_steel_encased_large_cogwheel',
                'createcasing:shadow_steel_encased_mangrove_cogwheel',
                'createcasing:shadow_steel_encased_mangrove_large_cogwheel',
                'createcasing:shadow_steel_encased_mangrove_shaft',
                'createcasing:shadow_steel_encased_mldeg_shaft',
                'createcasing:shadow_steel_encased_oak_cogwheel',
                'createcasing:shadow_steel_encased_oak_large_cogwheel',
                'createcasing:shadow_steel_encased_oak_shaft',
                'createcasing:shadow_steel_encased_shaft',
                'createcasing:shadow_steel_encased_spruce_shaft',
                'createcasing:shadow_steel_encased_warped_cogwheel',
                'createcasing:shadow_steel_encased_warped_large_cogwheel',
                'createcasing:shadow_steel_encased_warped_shaft',
                'createcasing:shadow_steel_encased_zinc_cogwheel',
                'createcasing:shadow_steel_encased_zinc_large_cogwheel',
                'createcasing:shadow_steel_encased_zinc_shaft',
                'createcasing:weathered_iron_encased_acacia_cogwheel',
                'createcasing:weathered_iron_encased_acacia_large_cogwheel',
                'createcasing:weathered_iron_encased_acacia_shaft',
                'createcasing:weathered_iron_encased_andesite_cogwheel',
                'createcasing:weathered_iron_encased_andesite_large_cogwheel',
                'createcasing:weathered_iron_encased_bamboo_cogwheel',
                'createcasing:weathered_iron_encased_bamboo_large_cogwheel',
                'createcasing:weathered_iron_encased_bamboo_shaft',
                'createcasing:weathered_iron_encased_birch_cogwheel',
                'createcasing:weathered_iron_encased_birch_large_cogwheel',
                'createcasing:weathered_iron_encased_birch_shaft',
                'createcasing:weathered_iron_encased_brass_cogwheel',
                'createcasing:weathered_iron_encased_brass_large_cogwheel',
                'createcasing:weathered_iron_encased_brass_shaft',
                'createcasing:weathered_iron_encased_cherry_cogwheel',
                'createcasing:weathered_iron_encased_cherry_large_cogwheel',
                'createcasing:weathered_iron_encased_cherry_shaft',
                'createcasing:weathered_iron_encased_cogwheel',
                'createcasing:weathered_iron_encased_copper_cogwheel',
                'createcasing:weathered_iron_encased_copper_large_cogwheel',
                'createcasing:weathered_iron_encased_copper_shaft',
                'createcasing:weathered_iron_encased_crimson_cogwheel',
                'createcasing:weathered_iron_encased_crimson_large_cogwheel',
                'createcasing:weathered_iron_encased_crimson_shaft',
                'createcasing:weathered_iron_encased_dark_oak_cogwheel',
                'createcasing:weathered_iron_encased_dark_oak_large_cogwheel',
                'createcasing:weathered_iron_encased_dark_oak_shaft',
                'createcasing:weathered_iron_encased_glass_shaft',
                'createcasing:weathered_iron_encased_jungle_cogwheel',
                'createcasing:weathered_iron_encased_jungle_large_cogwheel',
                'createcasing:weathered_iron_encased_jungle_shaft',
                'createcasing:weathered_iron_encased_large_cogwheel',
                'createcasing:weathered_iron_encased_mangrove_cogwheel',
                'createcasing:weathered_iron_encased_mangrove_large_cogwheel',
                'createcasing:weathered_iron_encased_mangrove_shaft',
                'createcasing:weathered_iron_encased_mldeg_shaft',
                'createcasing:weathered_iron_encased_oak_cogwheel',
                'createcasing:weathered_iron_encased_oak_large_cogwheel',
                'createcasing:weathered_iron_encased_oak_shaft',
                'createcasing:weathered_iron_encased_shaft',
                'createcasing:weathered_iron_encased_spruce_shaft',
                'createcasing:weathered_iron_encased_warped_cogwheel',
                'createcasing:weathered_iron_encased_warped_large_cogwheel',
                'createcasing:weathered_iron_encased_warped_shaft',
                'createcasing:weathered_iron_encased_zinc_cogwheel',
                'createcasing:weathered_iron_encased_zinc_large_cogwheel',
                'createcasing:weathered_iron_encased_zinc_shaft',
                'createcasing:zinc_encased_acacia_cogwheel',
                'createcasing:zinc_encased_acacia_large_cogwheel',
                'createcasing:zinc_encased_acacia_shaft',
                'createcasing:zinc_encased_andesite_cogwheel',
                'createcasing:zinc_encased_andesite_large_cogwheel',
                'createcasing:zinc_encased_bamboo_cogwheel',
                'createcasing:zinc_encased_bamboo_large_cogwheel',
                'createcasing:zinc_encased_bamboo_shaft',
                'createcasing:zinc_encased_birch_cogwheel',
                'createcasing:zinc_encased_birch_large_cogwheel',
                'createcasing:zinc_encased_birch_shaft',
                'createcasing:zinc_encased_brass_cogwheel',
                'createcasing:zinc_encased_brass_large_cogwheel',
                'createcasing:zinc_encased_brass_shaft',
                'createcasing:zinc_encased_cherry_cogwheel',
                'createcasing:zinc_encased_cherry_large_cogwheel',
                'createcasing:zinc_encased_cherry_shaft',
                'createcasing:zinc_encased_cogwheel',
                'createcasing:zinc_encased_copper_cogwheel',
                'createcasing:zinc_encased_copper_large_cogwheel',
                'createcasing:zinc_encased_copper_shaft',
                'createcasing:zinc_encased_crimson_cogwheel',
                'createcasing:zinc_encased_crimson_large_cogwheel',
                'createcasing:zinc_encased_crimson_shaft',
                'createcasing:zinc_encased_dark_oak_cogwheel',
                'createcasing:zinc_encased_dark_oak_large_cogwheel',
                'createcasing:zinc_encased_dark_oak_shaft',
                'createcasing:zinc_encased_glass_shaft',
                'createcasing:zinc_encased_jungle_cogwheel',
                'createcasing:zinc_encased_jungle_large_cogwheel',
                'createcasing:zinc_encased_jungle_shaft',
                'createcasing:zinc_encased_large_cogwheel',
                'createcasing:zinc_encased_mangrove_cogwheel',
                'createcasing:zinc_encased_mangrove_large_cogwheel',
                'createcasing:zinc_encased_mangrove_shaft',
                'createcasing:zinc_encased_mldeg_shaft',
                'createcasing:zinc_encased_oak_cogwheel',
                'createcasing:zinc_encased_oak_large_cogwheel',
                'createcasing:zinc_encased_oak_shaft',
                'createcasing:zinc_encased_shaft',
                'createcasing:zinc_encased_spruce_shaft',
                'createcasing:zinc_encased_warped_cogwheel',
                'createcasing:zinc_encased_warped_large_cogwheel',
                'createcasing:zinc_encased_warped_shaft',
                'createcasing:zinc_encased_zinc_cogwheel',
                'createcasing:zinc_encased_zinc_large_cogwheel',
                'createcasing:zinc_encased_zinc_shaft'
            ],
            text: [Text.translate('ll8.info.createcasing.apply_casing')]
        },
        {
            filter: [
                'displaydelight:abd_cherry_cream_soda',
                'displaydelight:abd_duck_noodles',
                'displaydelight:abd_dune_platter',
                'displaydelight:abd_passion_aloe_nectar',
                'displaydelight:abd_passion_fruit_glazed_duck',
                'displaydelight:abd_perch_with_mushrooms',
                'displaydelight:abd_pickerelweed_juice',
                'displaydelight:abd_pike_with_beetroot',
                'displaydelight:abd_plated_cherry_cookie',
                'displaydelight:abd_plated_escargot',
                'displaydelight:abd_plated_maple_cookie',
                'displaydelight:abd_plated_mulberry_cookie',
                'displaydelight:abd_seared_venison',
                'displaydelight:abd_slabdish',
                'displaydelight:abd_small_plated_adzuki_cake_slice',
                'displaydelight:abd_small_plated_banana_cake_slice',
                'displaydelight:abd_small_plated_chocolate_cake_slice',
                'displaydelight:abd_small_plated_mint_cake_slice',
                'displaydelight:abd_small_plated_strawberry_cake_slice',
                'displaydelight:abd_small_plated_vanilla_cake_slice',
                'displaydelight:abd_small_plated_yucca_gateau_slice',
                'displaydelight:abd_venison_with_bamboo_shoots',
                'displaydelight:acd_baked_pollock_with_carrots',
                'displaydelight:acd_bass_stew',
                'displaydelight:acd_buckling',
                'displaydelight:acd_crispy_nori_kelp',
                'displaydelight:acd_fish_and_chips',
                'displaydelight:acd_fish_chorba',
                'displaydelight:acd_halaszle',
                'displaydelight:acd_halibut_with_tartar_sauce',
                'displaydelight:acd_jellyfish_jelly',
                'displaydelight:acd_large_fish_with_vegetables',
                'displaydelight:acd_plated_catfish_barbecue',
                'displaydelight:acd_poor_fisher_chowder',
                'displaydelight:acd_rollmops',
                'displaydelight:acd_small_plated_fried_perch_roll',
                'displaydelight:acd_small_plated_raw_fish_fillet_roll',
                'displaydelight:acd_tuna_spaghetti',
                'displaydelight:acd_turtle_meat_dish',
                'displaydelight:acd_unusual_fish_soup',
                'displaydelight:ad_acacia_blossom_soup',
                'displaydelight:ad_kangaroo_pasta',
                'displaydelight:ad_kangaroo_stew',
                'displaydelight:ad_lobster_pasta',
                'displaydelight:ad_maggot_salad',
                'displaydelight:ad_plated_bison_burger',
                'displaydelight:ad_plated_bunfungus_sandwich',
                'displaydelight:ad_plated_gongylidia_bruschetta',
                'displaydelight:apple_cider',
                'displaydelight:bacon_and_eggs',
                'displaydelight:baked_cod_stew',
                'displaydelight:beef_stew',
                'displaydelight:beetroot_soup',
                'displaydelight:bnc_cheesy_pasta',
                'displaydelight:bnc_creamy_onion_soup',
                'displaydelight:bnc_fiery_fondue',
                'displaydelight:bnc_horror_lasagna',
                'displaydelight:bnc_plated_ham_and_cheese_sandwich',
                'displaydelight:bnc_scarlet_pierogi',
                'displaydelight:bnc_small_plated_quiche_slice',
                'displaydelight:bnc_vegetable_omelet',
                'displaydelight:bone_broth',
                'displaydelight:bowl',
                'displaydelight:cabbage_rolls',
                'displaydelight:cd_corn_soup',
                'displaydelight:cd_cornbread_stuffing',
                'displaydelight:cd_creamed_corn',
                'displaydelight:cd_creamy_corn_drink',
                'displaydelight:cd_nachos_bowl',
                'displaydelight:cd_plated_classic_corn_dog',
                'displaydelight:cd_plated_grilled_corn',
                'displaydelight:cd_plated_taco',
                'displaydelight:chicken_soup',
                'displaydelight:cooked_rice',
                'displaydelight:crd_bisque',
                'displaydelight:crd_clam_bake',
                'displaydelight:crd_clam_chowder',
                'displaydelight:crd_coconut_milk',
                'displaydelight:crd_coconut_pudding',
                'displaydelight:crd_coral_crunch',
                'displaydelight:crd_kelp_shake',
                'displaydelight:crd_plated_fish_stick',
                'displaydelight:crd_plated_frog_leg_kebab',
                'displaydelight:crd_plated_shrimp_skewer',
                'displaydelight:crd_plated_squid_kebab',
                'displaydelight:crd_plated_stuffed_nautilus_shell',
                'displaydelight:crd_seafood_gumbo',
                'displaydelight:crd_shrimp_fried_rice',
                'displaydelight:crd_surf_and_turf',
                'displaydelight:ctd_creamed_corn',
                'displaydelight:ctd_eggplant_parmesan',
                'displaydelight:ctd_fried_eggplant_pasta',
                'displaydelight:ctd_hearty_salad',
                'displaydelight:ctd_plated_avocado_toast',
                'displaydelight:ctd_plated_beef_burrito',
                'displaydelight:ctd_plated_calamari_roll',
                'displaydelight:ctd_plated_chicken_roll',
                'displaydelight:ctd_plated_chicken_roll_slice',
                'displaydelight:ctd_plated_chicken_taco',
                'displaydelight:ctd_plated_egg_roll',
                'displaydelight:ctd_plated_eggplant_burger',
                'displaydelight:ctd_plated_elote',
                'displaydelight:ctd_plated_empanada',
                'displaydelight:ctd_plated_fish_taco',
                'displaydelight:ctd_plated_midori_roll',
                'displaydelight:ctd_plated_midori_roll_slice',
                'displaydelight:ctd_plated_mutton_sandwich',
                'displaydelight:ctd_plated_pork_wrap',
                'displaydelight:ctd_plated_pufferfish_roll',
                'displaydelight:ctd_plated_rice_ball',
                'displaydelight:ctd_plated_tropical_roll',
                'displaydelight:ctd_poached_eggplants',
                'displaydelight:ctd_small_plated_calamari_roll',
                'displaydelight:ctd_small_plated_chicken_roll_slice',
                'displaydelight:ctd_small_plated_cut_pickle',
                'displaydelight:ctd_small_plated_egg_roll',
                'displaydelight:ctd_small_plated_midori_roll_slice',
                'displaydelight:ctd_small_plated_pufferfish_roll',
                'displaydelight:ctd_small_plated_rice_ball',
                'displaydelight:ctd_small_plated_tropical_roll',
                'displaydelight:ctd_spicy_curry',
                'displaydelight:df_berry_matcha_latte',
                'displaydelight:df_cactus_chili',
                'displaydelight:df_cactus_soup',
                'displaydelight:df_ender_nectar',
                'displaydelight:df_field_salad',
                'displaydelight:df_icecream_bottle_base',
                'displaydelight:df_matcha_ice_cream',
                'displaydelight:df_matcha_latte',
                'displaydelight:df_matcha_milkshake',
                'displaydelight:df_plated_cantaloupe_bread',
                'displaydelight:df_plated_cantaloupe_popsicle',
                'displaydelight:df_plated_cheeseburger',
                'displaydelight:df_plated_cooked_marshmallow_stick',
                'displaydelight:df_plated_deluxe_cheeseburger',
                'displaydelight:df_plated_nut_butter_and_jelly_sandwich',
                'displaydelight:df_plated_smore',
                'displaydelight:df_plated_wrapped_cantaloupe',
                'displaydelight:df_salmonberry_ice_cream',
                'displaydelight:df_salmonberry_milkshake',
                'displaydelight:df_sinigang',
                'displaydelight:df_small_plated_pumpkin_pie_slice',
                'displaydelight:df_small_plated_salmonberry_pie_slice',
                'displaydelight:df_stuffed_cantaloupe',
                'displaydelight:ed_apple_juice',
                'displaydelight:ed_asparagus_and_bacon_cheesy',
                'displaydelight:ed_asparagus_frittata',
                'displaydelight:ed_asparagus_mushroom_pasta',
                'displaydelight:ed_asparagus_soup',
                'displaydelight:ed_asparagus_soup_creamy',
                'displaydelight:ed_chili_pepper_salmon',
                'displaydelight:ed_cinnamon_apples',
                'displaydelight:ed_cinnamon_rice',
                'displaydelight:ed_cranberry_chicken',
                'displaydelight:ed_cranberry_juice',
                'displaydelight:ed_glow_berry_juice',
                'displaydelight:ed_goat_cheese_beetroot_salad',
                'displaydelight:ed_mac_and_cheese',
                'displaydelight:ed_peanut_honey_soup',
                'displaydelight:ed_peanut_salad',
                'displaydelight:ed_peperonata',
                'displaydelight:ed_plated_berry_sweet_roll',
                'displaydelight:ed_plated_cheese_sandwich',
                'displaydelight:ed_plated_chocolate_cookie',
                'displaydelight:ed_plated_cranberry_goat_cheese_toast',
                'displaydelight:ed_plated_cranberry_jelly_sandwich',
                'displaydelight:ed_plated_glow_berry_jelly_sandwich',
                'displaydelight:ed_plated_glow_berry_sweet_roll',
                'displaydelight:ed_plated_grilled_cheese',
                'displaydelight:ed_plated_peanut_butter_honey_sandwich',
                'displaydelight:ed_plated_peanut_butter_sandwich',
                'displaydelight:ed_plated_snickerdoodle',
                'displaydelight:ed_plated_sugar_cookie',
                'displaydelight:ed_plated_sweet_berry_jelly_sandwich',
                'displaydelight:ed_plated_sweet_roll',
                'displaydelight:ed_small_plated_berry_sweet_roll',
                'displaydelight:ed_small_plated_cheese_slice',
                'displaydelight:ed_small_plated_cranberry_cobbler_slice',
                'displaydelight:ed_small_plated_glow_berry_sweet_roll',
                'displaydelight:ed_small_plated_honeyed_goat_cheese_tart_slice',
                'displaydelight:ed_small_plated_sweet_roll',
                'displaydelight:ed_sweet_berry_juice',
                'displaydelight:ed_sweet_potato_casserole',
                'displaydelight:ed_sweet_potato_salad',
                'displaydelight:edd_assorted_salad',
                'displaydelight:edd_bubble_tea',
                'displaydelight:edd_chorus_flower_tea',
                'displaydelight:edd_chorus_fruit_milk_tea',
                'displaydelight:edd_chorus_fruit_wine',
                'displaydelight:edd_dragon_breath_and_chorus_soup',
                'displaydelight:edd_dragon_breath_soda',
                'displaydelight:edd_dragon_leg_with_sauce',
                'displaydelight:edd_dragon_meat_stew',
                'displaydelight:edd_end_mixed_salad',
                'displaydelight:edd_ender_congee',
                'displaydelight:edd_ender_noodle',
                'displaydelight:edd_enderman_gristle_stew',
                'displaydelight:edd_grilled_shulker',
                'displaydelight:edd_plated_chorus_flower_pie',
                'displaydelight:edd_plated_chorus_fruit_popsicle',
                'displaydelight:edd_plated_end_barbecue_stick',
                'displaydelight:edd_plated_ender_bamboo_rice',
                'displaydelight:edd_plated_stuffed_rice_cake',
                'displaydelight:edd_roasted_dragon_steak',
                'displaydelight:edd_shulker_soup',
                'displaydelight:edd_small_plated_chorus_fruit_pie_slice',
                'displaydelight:edd_steamed_dragon_egg',
                'displaydelight:edd_steamed_dragon_egg_block',
                'displaydelight:edd_stir_fried_shulker_meat',
                'displaydelight:erd_amberveil_stew',
                'displaydelight:erd_amberveiled_curry',
                'displaydelight:erd_chicken_curry',
                'displaydelight:erd_chorus_juice',
                'displaydelight:erd_chorus_stew',
                'displaydelight:erd_ender_paella',
                'displaydelight:erd_endermite_stew',
                'displaydelight:erd_pearl_pasta',
                'displaydelight:erd_plated_crawling_sandwich',
                'displaydelight:erd_plated_crispy_skewer',
                'displaydelight:erd_plated_strange_eclair',
                'displaydelight:erd_plated_uncanny_cookies',
                'displaydelight:erd_small_plated_chorus_pie_slice',
                'displaydelight:erd_steak_fries',
                'displaydelight:erd_stuffed_shulker_bowl',
                'displaydelight:erd_twisted_cereal',
                'displaydelight:erd_veil_of_flames_risotto',
                'displaydelight:fd_christmas_tea',
                'displaydelight:fd_festive_chicken',
                'displaydelight:fd_salmon_verrines',
                'displaydelight:fish_stew',
                'displaydelight:fr_black_cod',
                'displaydelight:fr_black_tea',
                'displaydelight:fr_blazing_chili',
                'displaydelight:fr_coffee',
                'displaydelight:fr_dandelion_tea',
                'displaydelight:fr_gamblers_tea',
                'displaydelight:fr_green_tea',
                'displaydelight:fr_plated_green_tea_cookie',
                'displaydelight:fr_purulent_tea',
                'displaydelight:fr_rose_hip_tea',
                'displaydelight:fr_small_plated_coffee_cake_slice',
                'displaydelight:fr_small_plated_rose_hip_pie_slice',
                'displaydelight:fr_tea_curry',
                'displaydelight:fr_yellow_tea',
                'displaydelight:fried_rice',
                'displaydelight:fruit_salad',
                'displaydelight:gleaming_salad',
                'displaydelight:glow_berry_custard',
                'displaydelight:grilled_salmon',
                'displaydelight:honey_glazed_ham',
                'displaydelight:hot_cocoa',
                'displaydelight:lm_chicken_curry',
                'displaydelight:lm_cod_deluxe',
                'displaydelight:lm_hearty_lunch',
                'displaydelight:lm_mushroom_pot_pie',
                'displaydelight:lm_omurice',
                'displaydelight:lm_pasta_with_mushroom_sauce',
                'displaydelight:lm_potato_soup',
                'displaydelight:lm_pufferfish_broth',
                'displaydelight:lm_red_soup',
                'displaydelight:lm_rice_pudding',
                'displaydelight:lm_roasted_mutton_rack',
                'displaydelight:lm_sweet_berry_custard',
                'displaydelight:lm_tomato_egg_soup',
                'displaydelight:md_bat_soup',
                'displaydelight:md_bowl_of_stuffed_squid',
                'displaydelight:md_cave_soup',
                'displaydelight:md_glow_ink_pasta',
                'displaydelight:md_insect_stew',
                'displaydelight:md_pasta_with_veggieballs',
                'displaydelight:md_plate_of_fake_meatloaf',
                'displaydelight:md_plate_of_glazed_arachnid_limbs',
                'displaydelight:md_plated_cave_hamburger',
                'displaydelight:md_plated_improvised_barbecue_stick',
                'displaydelight:md_plated_insect_sandwich',
                'displaydelight:md_plated_insect_wrap',
                'displaydelight:md_plated_squid_sandwich',
                'displaydelight:md_plated_tentacles_on_a_stick',
                'displaydelight:md_plated_vegan_hamburger',
                'displaydelight:md_plated_vegan_wrap',
                'displaydelight:md_seasoned_arthropods',
                'displaydelight:md_takoyaki',
                'displaydelight:md_vegan_steak_and_potatoes',
                'displaydelight:melon_juice',
                'displaydelight:mixed_salad',
                'displaydelight:mnd_bleeding_tartar',
                'displaydelight:mnd_blue_tenderloin_steak',
                'displaydelight:mnd_breakfast_sampler',
                'displaydelight:mnd_crimson_stroganoff',
                'displaydelight:mnd_dried_ghast_with_milk',
                'displaydelight:mnd_egg_soup',
                'displaydelight:mnd_fried_hoglin_chop',
                'displaydelight:mnd_ghast_salad',
                'displaydelight:mnd_giant_takoyaki',
                'displaydelight:mnd_hot_wings',
                'displaydelight:mnd_plate_of_cold_striderloaf',
                'displaydelight:mnd_plate_of_ghasta_with_cream',
                'displaydelight:mnd_plate_of_striderloaf',
                'displaydelight:mnd_plate_of_stuffed_hoglin',
                'displaydelight:mnd_plate_of_stuffed_hoglin_ham',
                'displaydelight:mnd_plate_of_stuffed_hoglin_snout',
                'displaydelight:mnd_plated_bacon-wrapped_sausage_on_a_stick',
                'displaydelight:mnd_plated_burnt_roll',
                'displaydelight:mnd_plated_chilidog',
                'displaydelight:mnd_plated_deviled_egg',
                'displaydelight:mnd_plated_fries_ghasta',
                'displaydelight:mnd_plated_hotdog_with_mixed_salad',
                'displaydelight:mnd_plated_hotdog_with_nether_salad',
                'displaydelight:mnd_plated_nether_burger',
                'displaydelight:mnd_plated_red_loin_on_a_stick',
                'displaydelight:mnd_plated_spicy_cotton',
                'displaydelight:mnd_plated_spicy_skewer',
                'displaydelight:mnd_plated_stuffed_pepper',
                'displaydelight:mnd_rock_soup',
                'displaydelight:mnd_sausage_and_potatoes',
                'displaydelight:mnd_scotch_eggs',
                'displaydelight:mnd_sizzling_pudding',
                'displaydelight:mnd_small_plated_magma_cake_slice',
                'displaydelight:mnd_spicy_curry',
                'displaydelight:mnd_spicy_hoglin_stew',
                'displaydelight:mnd_spicy_noodle_soup',
                'displaydelight:mnd_strider_stew',
                'displaydelight:mnd_strider_with_grilled_fungus',
                'displaydelight:mnd_twisted_ghasta',
                'displaydelight:mushroom_rice',
                'displaydelight:mushroom_stew',
                'displaydelight:nd_grilled_strider',
                'displaydelight:nd_plate_of_stuffed_hoglin_ham',
                'displaydelight:nd_plate_of_stuffed_hoglin_roast',
                'displaydelight:nd_plate_of_stuffed_hoglin_snout',
                'displaydelight:nd_plated_nether_skewer',
                'displaydelight:nd_strider_moss_stew',
                'displaydelight:nd_warped_moldy_meat',
                'displaydelight:nether_salad',
                'displaydelight:noodle_soup',
                'displaydelight:od_bowl_of_guardian_soup',
                'displaydelight:od_braised_sea_pickle',
                'displaydelight:od_plated_baked_tentacle_on_a_stick',
                'displaydelight:od_plated_cooked_stuffed_cod',
                'displaydelight:od_plated_elder_guardian_roll',
                'displaydelight:od_plated_fugu_roll',
                'displaydelight:od_plated_honey_fried_kelp',
                'displaydelight:od_seagrass_salad',
                'displaydelight:od_small_plated_elder_guardian_roll',
                'displaydelight:od_small_plated_fugu_roll',
                'displaydelight:od_squid_rings',
                'displaydelight:onion_soup',
                'displaydelight:pasta_with_meatballs',
                'displaydelight:pasta_with_mutton_chop',
                'displaydelight:pd_icecream_bottle_base',
                'displaydelight:pd_pineapple_fried_rice',
                'displaydelight:pd_pineapple_ice_cream',
                'displaydelight:pd_pineapple_juice',
                'displaydelight:pd_pineapple_milk_shake',
                'displaydelight:pd_small_plated_pineapple_cake_slice',
                'displaydelight:pd_small_plated_pineapple_pie_side',
                'displaydelight:plated_bacon_sandwich',
                'displaydelight:plated_barbecue_stick',
                'displaydelight:plated_cabbage_rolls',
                'displaydelight:plated_chicken_sandwich',
                'displaydelight:plated_cod_roll',
                'displaydelight:plated_cookie',
                'displaydelight:plated_dumplings',
                'displaydelight:plated_egg_sandwich',
                'displaydelight:plated_hamburger',
                'displaydelight:plated_honey_cookie',
                'displaydelight:plated_kelp_roll',
                'displaydelight:plated_kelp_roll_slice',
                'displaydelight:plated_melon_popsicle',
                'displaydelight:plated_mutton_wrap',
                'displaydelight:plated_pumpkin_pie',
                'displaydelight:plated_salmon_roll',
                'displaydelight:plated_stuffed_potato',
                'displaydelight:plated_sweet_berry_cookie',
                'displaydelight:pumpkin_soup',
                'displaydelight:rabbit_stew',
                'displaydelight:ratatouille',
                'displaydelight:roast_chicken',
                'displaydelight:roasted_mutton_chops',
                'displaydelight:shepherds_pie',
                'displaydelight:small_plated_apple_pie_slice',
                'displaydelight:small_plated_cabbage_rolls',
                'displaydelight:small_plated_cake_slice',
                'displaydelight:small_plated_chocolate_pie_slice',
                'displaydelight:small_plated_cod_roll',
                'displaydelight:small_plated_kelp_roll_slice',
                'displaydelight:small_plated_pumpkin_pie_slice',
                'displaydelight:small_plated_salmon_roll',
                'displaydelight:small_plated_stuffed_potato',
                'displaydelight:small_plated_sweet_berry_cheesecake_slice',
                'displaydelight:squid_ink_pasta',
                'displaydelight:steak_and_potatoes',
                'displaydelight:stuffed_pumpkin',
                'displaydelight:vegetable_noodles',
                'displaydelight:vegetable_soup'
            ],
            text: [Text.translate('ll8.info.displaydelight.place_the_food')]
        }
    ];

    hints.forEach((hint) => {
        event.add(hint.filter, hint.text);
    });
});
