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
                'pastel:tilled_shale_clay',
                'pastel:tilled_slush'
            ],
            text: [Text.translate('ll8.info.pastel.till_with_hoe')]
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
                'aether:aether_farmland'
            ],
            text: [Text.translate('ll8.info.aether.till_with_hoe')]
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
