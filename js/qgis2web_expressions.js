// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_ZO_31_7080cm_2rule1_eval_expression(context) {
    // Baars_pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars_pos']  > 0);
    } else {
        return (feature['Baars_pos']  > 0);
    }
}


function exp_ZO_31_7080cm_2rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_3rule1_eval_expression(context) {
    // Baars_pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars_pos']  > 0);
    } else {
        return (feature['Baars_pos']  > 0);
    }
}


function exp_ZO_31_6070cm_3rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_4rule1_eval_expression(context) {
    // Baars_pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars_pos']  > 0);
    } else {
        return (feature['Baars_pos']  > 0);
    }
}


function exp_ZO_31_50_60cm_4rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_5rule1_eval_expression(context) {
    // Baars_pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars_pos']  > 0);
    } else {
        return (feature['Baars_pos']  > 0);
    }
}


function exp_ZO_31_4050cm_5rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_6rule1_eval_expression(context) {
    // Baars_pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars_pos']  > 0);
    } else {
        return (feature['Baars_pos']  > 0);
    }
}


function exp_ZO_31_3040cm_6rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_7rule1_eval_expression(context) {
    // Baars_pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars_pos']  > 0);
    } else {
        return (feature['Baars_pos']  > 0);
    }
}


function exp_ZO_31_2030cm_7rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_8rule1_eval_expression(context) {
    // Baars_pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars_pos']  > 0);
    } else {
        return (feature['Baars_pos']  > 0);
    }
}


function exp_ZO_31_1020cm_8rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_9rule1_eval_expression(context) {
    // Baars_pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars_pos']  > 0);
    } else {
        return (feature['Baars_pos']  > 0);
    }
}


function exp_ZO_31_010cm_9rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_10rule1_eval_expression(context) {
    // Blankvoorn > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Blankvoorn']  > 0);
    } else {
        return (feature['Blankvoorn']  > 0);
    }
}


function exp_ZO_31_7080cm_10rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_11rule1_eval_expression(context) {
    // Blankvoorn > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Blankvoorn']  > 0);
    } else {
        return (feature['Blankvoorn']  > 0);
    }
}


function exp_ZO_31_6070cm_11rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_12rule1_eval_expression(context) {
    // Blankvoorn > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Blankvoorn']  > 0);
    } else {
        return (feature['Blankvoorn']  > 0);
    }
}


function exp_ZO_31_50_60cm_12rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_13rule1_eval_expression(context) {
    // Blankvoorn > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Blankvoorn']  > 0);
    } else {
        return (feature['Blankvoorn']  > 0);
    }
}


function exp_ZO_31_4050cm_13rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_14rule1_eval_expression(context) {
    // Blankvoorn > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Blankvoorn']  > 0);
    } else {
        return (feature['Blankvoorn']  > 0);
    }
}


function exp_ZO_31_3040cm_14rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_15rule1_eval_expression(context) {
    // Blankvoorn > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Blankvoorn']  > 0);
    } else {
        return (feature['Blankvoorn']  > 0);
    }
}


function exp_ZO_31_2030cm_15rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_16rule1_eval_expression(context) {
    // Blankvoorn > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Blankvoorn']  > 0);
    } else {
        return (feature['Blankvoorn']  > 0);
    }
}


function exp_ZO_31_1020cm_16rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_17rule1_eval_expression(context) {
    // Blankvoorn > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Blankvoorn']  > 0);
    } else {
        return (feature['Blankvoorn']  > 0);
    }
}


function exp_ZO_31_010cm_17rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_18rule1_eval_expression(context) {
    // Bot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Bot']  > 0);
    } else {
        return (feature['Bot']  > 0);
    }
}


function exp_ZO_31_7080cm_18rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_19rule1_eval_expression(context) {
    // Bot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Bot']  > 0);
    } else {
        return (feature['Bot']  > 0);
    }
}


function exp_ZO_31_6070cm_19rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_20rule1_eval_expression(context) {
    // Bot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Bot']  > 0);
    } else {
        return (feature['Bot']  > 0);
    }
}


function exp_ZO_31_50_60cm_20rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_21rule1_eval_expression(context) {
    // Bot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Bot']  > 0);
    } else {
        return (feature['Bot']  > 0);
    }
}


function exp_ZO_31_4050cm_21rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_22rule1_eval_expression(context) {
    // Bot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Bot']  > 0);
    } else {
        return (feature['Bot']  > 0);
    }
}


function exp_ZO_31_3040cm_22rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_23rule1_eval_expression(context) {
    // Bot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Bot']  > 0);
    } else {
        return (feature['Bot']  > 0);
    }
}


function exp_ZO_31_2030cm_23rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_24rule1_eval_expression(context) {
    // Bot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Bot']  > 0);
    } else {
        return (feature['Bot']  > 0);
    }
}


function exp_ZO_31_1020cm_24rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_25rule1_eval_expression(context) {
    // Bot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Bot']  > 0);
    } else {
        return (feature['Bot']  > 0);
    }
}


function exp_ZO_31_010cm_25rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_26rule1_eval_expression(context) {
    // Driedoornige_stekelbaars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Driedoornige_stekelbaars']  > 0);
    } else {
        return (feature['Driedoornige_stekelbaars']  > 0);
    }
}


function exp_ZO_31_7080cm_26rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_27rule1_eval_expression(context) {
    // Driedoornige_stekelbaars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Driedoornige_stekelbaars']  > 0);
    } else {
        return (feature['Driedoornige_stekelbaars']  > 0);
    }
}


function exp_ZO_31_6070cm_27rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_28rule1_eval_expression(context) {
    // Driedoornige_stekelbaars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Driedoornige_stekelbaars']  > 0);
    } else {
        return (feature['Driedoornige_stekelbaars']  > 0);
    }
}


function exp_ZO_31_50_60cm_28rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_29rule1_eval_expression(context) {
    // Driedoornige_stekelbaars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Driedoornige_stekelbaars']  > 0);
    } else {
        return (feature['Driedoornige_stekelbaars']  > 0);
    }
}


function exp_ZO_31_4050cm_29rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_30rule1_eval_expression(context) {
    // Driedoornige_stekelbaars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Driedoornige_stekelbaars']  > 0);
    } else {
        return (feature['Driedoornige_stekelbaars']  > 0);
    }
}


function exp_ZO_31_3040cm_30rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_31rule1_eval_expression(context) {
    // Driedoornige_stekelbaars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Driedoornige_stekelbaars']  > 0);
    } else {
        return (feature['Driedoornige_stekelbaars']  > 0);
    }
}


function exp_ZO_31_2030cm_31rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_32rule1_eval_expression(context) {
    // Driedoornige_stekelbaars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Driedoornige_stekelbaars']  > 0);
    } else {
        return (feature['Driedoornige_stekelbaars']  > 0);
    }
}


function exp_ZO_31_1020cm_32rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_33rule1_eval_expression(context) {
    // Driedoornige_stekelbaars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Driedoornige_stekelbaars']  > 0);
    } else {
        return (feature['Driedoornige_stekelbaars']  > 0);
    }
}


function exp_ZO_31_010cm_33rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_34rule1_eval_expression(context) {
    // Elft_fint > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Elft_fint']  > 0);
    } else {
        return (feature['Elft_fint']  > 0);
    }
}


function exp_ZO_31_7080cm_34rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_35rule1_eval_expression(context) {
    // Elft_fint > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Elft_fint']  > 0);
    } else {
        return (feature['Elft_fint']  > 0);
    }
}


function exp_ZO_31_6070cm_35rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_36rule1_eval_expression(context) {
    // Elft_fint > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Elft_fint']  > 0);
    } else {
        return (feature['Elft_fint']  > 0);
    }
}


function exp_ZO_31_50_60cm_36rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_37rule1_eval_expression(context) {
    // Elft_fint > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Elft_fint']  > 0);
    } else {
        return (feature['Elft_fint']  > 0);
    }
}


function exp_ZO_31_4050cm_37rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_38rule1_eval_expression(context) {
    // Elft_fint > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Elft_fint']  > 0);
    } else {
        return (feature['Elft_fint']  > 0);
    }
}


function exp_ZO_31_3040cm_38rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_39rule1_eval_expression(context) {
    // Elft_fint > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Elft_fint']  > 0);
    } else {
        return (feature['Elft_fint']  > 0);
    }
}


function exp_ZO_31_2030cm_39rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_40rule1_eval_expression(context) {
    // Elft_fint > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Elft_fint']  > 0);
    } else {
        return (feature['Elft_fint']  > 0);
    }
}


function exp_ZO_31_1020cm_40rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_41rule1_eval_expression(context) {
    // Elft_fint > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Elft_fint']  > 0);
    } else {
        return (feature['Elft_fint']  > 0);
    }
}


function exp_ZO_31_010cm_41rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_42rule1_eval_expression(context) {
    // Haring > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haring']  > 0);
    } else {
        return (feature['Haring']  > 0);
    }
}


function exp_ZO_31_7080cm_42rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_43rule1_eval_expression(context) {
    // Haring > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haring']  > 0);
    } else {
        return (feature['Haring']  > 0);
    }
}


function exp_ZO_31_6070cm_43rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_44rule1_eval_expression(context) {
    // Haring > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haring']  > 0);
    } else {
        return (feature['Haring']  > 0);
    }
}


function exp_ZO_31_50_60cm_44rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_45rule1_eval_expression(context) {
    // Haring > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haring']  > 0);
    } else {
        return (feature['Haring']  > 0);
    }
}


function exp_ZO_31_4050cm_45rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_46rule1_eval_expression(context) {
    // Haring > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haring']  > 0);
    } else {
        return (feature['Haring']  > 0);
    }
}


function exp_ZO_31_3040cm_46rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_47rule1_eval_expression(context) {
    // Haring > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haring']  > 0);
    } else {
        return (feature['Haring']  > 0);
    }
}


function exp_ZO_31_2030cm_47rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_48rule1_eval_expression(context) {
    // Haring > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haring']  > 0);
    } else {
        return (feature['Haring']  > 0);
    }
}


function exp_ZO_31_1020cm_48rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_49rule1_eval_expression(context) {
    // Haring > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haring']  > 0);
    } else {
        return (feature['Haring']  > 0);
    }
}


function exp_ZO_31_010cm_49rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_50rule1_eval_expression(context) {
    // Haringenachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haringenachtigen']  > 0);
    } else {
        return (feature['Haringenachtigen']  > 0);
    }
}


function exp_ZO_31_7080cm_50rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_51rule1_eval_expression(context) {
    // Haringenachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haringenachtigen']  > 0);
    } else {
        return (feature['Haringenachtigen']  > 0);
    }
}


function exp_ZO_31_6070cm_51rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_52rule1_eval_expression(context) {
    // Haringenachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haringenachtigen']  > 0);
    } else {
        return (feature['Haringenachtigen']  > 0);
    }
}


function exp_ZO_31_50_60cm_52rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_53rule1_eval_expression(context) {
    // Haringenachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haringenachtigen']  > 0);
    } else {
        return (feature['Haringenachtigen']  > 0);
    }
}


function exp_ZO_31_4050cm_53rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_54rule1_eval_expression(context) {
    // Haringenachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haringenachtigen']  > 0);
    } else {
        return (feature['Haringenachtigen']  > 0);
    }
}


function exp_ZO_31_3040cm_54rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_55rule1_eval_expression(context) {
    // Haringenachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haringenachtigen']  > 0);
    } else {
        return (feature['Haringenachtigen']  > 0);
    }
}


function exp_ZO_31_2030cm_55rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_56rule1_eval_expression(context) {
    // Haringenachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haringenachtigen']  > 0);
    } else {
        return (feature['Haringenachtigen']  > 0);
    }
}


function exp_ZO_31_1020cm_56rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_57rule1_eval_expression(context) {
    // Haringenachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Haringenachtigen']  > 0);
    } else {
        return (feature['Haringenachtigen']  > 0);
    }
}


function exp_ZO_31_010cm_57rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_58rule1_eval_expression(context) {
    // Harnasmannetje > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Harnasmannetje']  > 0);
    } else {
        return (feature['Harnasmannetje']  > 0);
    }
}


function exp_ZO_31_7080cm_58rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_59rule1_eval_expression(context) {
    // Harnasmannetje > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Harnasmannetje']  > 0);
    } else {
        return (feature['Harnasmannetje']  > 0);
    }
}


function exp_ZO_31_6070cm_59rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_60rule1_eval_expression(context) {
    // Harnasmannetje > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Harnasmannetje']  > 0);
    } else {
        return (feature['Harnasmannetje']  > 0);
    }
}


function exp_ZO_31_50_60cm_60rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_61rule1_eval_expression(context) {
    // Harnasmannetje > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Harnasmannetje']  > 0);
    } else {
        return (feature['Harnasmannetje']  > 0);
    }
}


function exp_ZO_31_4050cm_61rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_62rule1_eval_expression(context) {
    // Harnasmannetje > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Harnasmannetje']  > 0);
    } else {
        return (feature['Harnasmannetje']  > 0);
    }
}


function exp_ZO_31_3040cm_62rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_63rule1_eval_expression(context) {
    // Harnasmannetje > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Harnasmannetje']  > 0);
    } else {
        return (feature['Harnasmannetje']  > 0);
    }
}


function exp_ZO_31_2030cm_63rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_64rule1_eval_expression(context) {
    // Harnasmannetje > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Harnasmannetje']  > 0);
    } else {
        return (feature['Harnasmannetje']  > 0);
    }
}


function exp_ZO_31_1020cm_64rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_65rule1_eval_expression(context) {
    // Harnasmannetje > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Harnasmannetje']  > 0);
    } else {
        return (feature['Harnasmannetje']  > 0);
    }
}


function exp_ZO_31_010cm_65rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_66rule1_eval_expression(context) {
    // Kabeljauwen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kabeljauwen']  > 0);
    } else {
        return (feature['Kabeljauwen']  > 0);
    }
}


function exp_ZO_31_7080cm_66rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_67rule1_eval_expression(context) {
    // Kabeljauwen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kabeljauwen']  > 0);
    } else {
        return (feature['Kabeljauwen']  > 0);
    }
}


function exp_ZO_31_6070cm_67rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_68rule1_eval_expression(context) {
    // Kabeljauwen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kabeljauwen']  > 0);
    } else {
        return (feature['Kabeljauwen']  > 0);
    }
}


function exp_ZO_31_50_60cm_68rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_69rule1_eval_expression(context) {
    // Kabeljauwen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kabeljauwen']  > 0);
    } else {
        return (feature['Kabeljauwen']  > 0);
    }
}


function exp_ZO_31_4050cm_69rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_70rule1_eval_expression(context) {
    // Kabeljauwen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kabeljauwen']  > 0);
    } else {
        return (feature['Kabeljauwen']  > 0);
    }
}


function exp_ZO_31_3040cm_70rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_71rule1_eval_expression(context) {
    // Kabeljauwen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kabeljauwen']  > 0);
    } else {
        return (feature['Kabeljauwen']  > 0);
    }
}


function exp_ZO_31_2030cm_71rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_72rule1_eval_expression(context) {
    // Kabeljauwen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kabeljauwen']  > 0);
    } else {
        return (feature['Kabeljauwen']  > 0);
    }
}


function exp_ZO_31_1020cm_72rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_73rule1_eval_expression(context) {
    // Kabeljauwen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kabeljauwen']  > 0);
    } else {
        return (feature['Kabeljauwen']  > 0);
    }
}


function exp_ZO_31_010cm_73rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_74rule1_eval_expression(context) {
    // Karperachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Karperachtigen']  > 0);
    } else {
        return (feature['Karperachtigen']  > 0);
    }
}


function exp_ZO_31_7080cm_74rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_75rule1_eval_expression(context) {
    // Karperachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Karperachtigen']  > 0);
    } else {
        return (feature['Karperachtigen']  > 0);
    }
}


function exp_ZO_31_6070cm_75rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_76rule1_eval_expression(context) {
    // Karperachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Karperachtigen']  > 0);
    } else {
        return (feature['Karperachtigen']  > 0);
    }
}


function exp_ZO_31_50_60cm_76rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_77rule1_eval_expression(context) {
    // Karperachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Karperachtigen']  > 0);
    } else {
        return (feature['Karperachtigen']  > 0);
    }
}


function exp_ZO_31_4050cm_77rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_78rule1_eval_expression(context) {
    // Karperachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Karperachtigen']  > 0);
    } else {
        return (feature['Karperachtigen']  > 0);
    }
}


function exp_ZO_31_3040cm_78rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_79rule1_eval_expression(context) {
    // Karperachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Karperachtigen']  > 0);
    } else {
        return (feature['Karperachtigen']  > 0);
    }
}


function exp_ZO_31_2030cm_79rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_80rule1_eval_expression(context) {
    // Karperachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Karperachtigen']  > 0);
    } else {
        return (feature['Karperachtigen']  > 0);
    }
}


function exp_ZO_31_1020cm_80rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_81rule1_eval_expression(context) {
    // Karperachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Karperachtigen']  > 0);
    } else {
        return (feature['Karperachtigen']  > 0);
    }
}


function exp_ZO_31_010cm_81rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_82rule1_eval_expression(context) {
    // Kleine_zeenaald_grote_zeenaald > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kleine_zeenaald_grote_zeenaald']  > 0);
    } else {
        return (feature['Kleine_zeenaald_grote_zeenaald']  > 0);
    }
}


function exp_ZO_31_7080cm_82rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_83rule1_eval_expression(context) {
    // Kleine_zeenaald_grote_zeenaald > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kleine_zeenaald_grote_zeenaald']  > 0);
    } else {
        return (feature['Kleine_zeenaald_grote_zeenaald']  > 0);
    }
}


function exp_ZO_31_6070cm_83rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_84rule1_eval_expression(context) {
    // Kleine_zeenaald_grote_zeenaald > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kleine_zeenaald_grote_zeenaald']  > 0);
    } else {
        return (feature['Kleine_zeenaald_grote_zeenaald']  > 0);
    }
}


function exp_ZO_31_50_60cm_84rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_85rule1_eval_expression(context) {
    // Kleine_zeenaald_grote_zeenaald > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kleine_zeenaald_grote_zeenaald']  > 0);
    } else {
        return (feature['Kleine_zeenaald_grote_zeenaald']  > 0);
    }
}


function exp_ZO_31_4050cm_85rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_86rule1_eval_expression(context) {
    // Kleine_zeenaald_grote_zeenaald > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kleine_zeenaald_grote_zeenaald']  > 0);
    } else {
        return (feature['Kleine_zeenaald_grote_zeenaald']  > 0);
    }
}


function exp_ZO_31_3040cm_86rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_87rule1_eval_expression(context) {
    // Kleine_zeenaald_grote_zeenaald > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kleine_zeenaald_grote_zeenaald']  > 0);
    } else {
        return (feature['Kleine_zeenaald_grote_zeenaald']  > 0);
    }
}


function exp_ZO_31_2030cm_87rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_88rule1_eval_expression(context) {
    // Kleine_zeenaald_grote_zeenaald > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kleine_zeenaald_grote_zeenaald']  > 0);
    } else {
        return (feature['Kleine_zeenaald_grote_zeenaald']  > 0);
    }
}


function exp_ZO_31_1020cm_88rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_89rule1_eval_expression(context) {
    // Kleine_zeenaald_grote_zeenaald > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Kleine_zeenaald_grote_zeenaald']  > 0);
    } else {
        return (feature['Kleine_zeenaald_grote_zeenaald']  > 0);
    }
}


function exp_ZO_31_010cm_89rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_90rule1_eval_expression(context) {
    // Paling > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Paling']  > 0);
    } else {
        return (feature['Paling']  > 0);
    }
}


function exp_ZO_31_7080cm_90rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_91rule1_eval_expression(context) {
    // Paling > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Paling']  > 0);
    } else {
        return (feature['Paling']  > 0);
    }
}


function exp_ZO_31_6070cm_91rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_92rule1_eval_expression(context) {
    // Paling > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Paling']  > 0);
    } else {
        return (feature['Paling']  > 0);
    }
}


function exp_ZO_31_50_60cm_92rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_93rule1_eval_expression(context) {
    // Paling > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Paling']  > 0);
    } else {
        return (feature['Paling']  > 0);
    }
}


function exp_ZO_31_4050cm_93rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_94rule1_eval_expression(context) {
    // Paling > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Paling']  > 0);
    } else {
        return (feature['Paling']  > 0);
    }
}


function exp_ZO_31_3040cm_94rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_95rule1_eval_expression(context) {
    // Paling > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Paling']  > 0);
    } else {
        return (feature['Paling']  > 0);
    }
}


function exp_ZO_31_2030cm_95rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_96rule1_eval_expression(context) {
    // Paling > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Paling']  > 0);
    } else {
        return (feature['Paling']  > 0);
    }
}


function exp_ZO_31_1020cm_96rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_97rule1_eval_expression(context) {
    // Paling > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Paling']  > 0);
    } else {
        return (feature['Paling']  > 0);
    }
}


function exp_ZO_31_010cm_97rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_98rule1_eval_expression(context) {
    // Pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Pos']  > 0);
    } else {
        return (feature['Pos']  > 0);
    }
}


function exp_ZO_31_7080cm_98rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_99rule1_eval_expression(context) {
    // Pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Pos']  > 0);
    } else {
        return (feature['Pos']  > 0);
    }
}


function exp_ZO_31_6070cm_99rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_100rule1_eval_expression(context) {
    // Pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Pos']  > 0);
    } else {
        return (feature['Pos']  > 0);
    }
}


function exp_ZO_31_50_60cm_100rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_101rule1_eval_expression(context) {
    // Pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Pos']  > 0);
    } else {
        return (feature['Pos']  > 0);
    }
}


function exp_ZO_31_4050cm_101rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_102rule1_eval_expression(context) {
    // Pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Pos']  > 0);
    } else {
        return (feature['Pos']  > 0);
    }
}


function exp_ZO_31_3040cm_102rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_103rule1_eval_expression(context) {
    // Pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Pos']  > 0);
    } else {
        return (feature['Pos']  > 0);
    }
}


function exp_ZO_31_2030cm_103rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_104rule1_eval_expression(context) {
    // Pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Pos']  > 0);
    } else {
        return (feature['Pos']  > 0);
    }
}


function exp_ZO_31_1020cm_104rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_105rule1_eval_expression(context) {
    // Pos > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Pos']  > 0);
    } else {
        return (feature['Pos']  > 0);
    }
}


function exp_ZO_31_010cm_105rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_106rule1_eval_expression(context) {
    // Schol > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Schol']  > 0);
    } else {
        return (feature['Schol']  > 0);
    }
}


function exp_ZO_31_7080cm_106rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_107rule1_eval_expression(context) {
    // Schol > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Schol']  > 0);
    } else {
        return (feature['Schol']  > 0);
    }
}


function exp_ZO_31_6070cm_107rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_108rule1_eval_expression(context) {
    // Schol > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Schol']  > 0);
    } else {
        return (feature['Schol']  > 0);
    }
}


function exp_ZO_31_50_60cm_108rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_109rule1_eval_expression(context) {
    // Schol > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Schol']  > 0);
    } else {
        return (feature['Schol']  > 0);
    }
}


function exp_ZO_31_4050cm_109rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_110rule1_eval_expression(context) {
    // Schol > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Schol']  > 0);
    } else {
        return (feature['Schol']  > 0);
    }
}


function exp_ZO_31_3040cm_110rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_111rule1_eval_expression(context) {
    // Schol > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Schol']  > 0);
    } else {
        return (feature['Schol']  > 0);
    }
}


function exp_ZO_31_2030cm_111rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_112rule1_eval_expression(context) {
    // Schol > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Schol']  > 0);
    } else {
        return (feature['Schol']  > 0);
    }
}


function exp_ZO_31_1020cm_112rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_113rule1_eval_expression(context) {
    // Schol > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Schol']  > 0);
    } else {
        return (feature['Schol']  > 0);
    }
}


function exp_ZO_31_010cm_113rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_114rule1_eval_expression(context) {
    // Scholachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Scholachtigen']  > 0);
    } else {
        return (feature['Scholachtigen']  > 0);
    }
}


function exp_ZO_31_7080cm_114rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_115rule1_eval_expression(context) {
    // Scholachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Scholachtigen']  > 0);
    } else {
        return (feature['Scholachtigen']  > 0);
    }
}


function exp_ZO_31_6070cm_115rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_116rule1_eval_expression(context) {
    // Scholachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Scholachtigen']  > 0);
    } else {
        return (feature['Scholachtigen']  > 0);
    }
}


function exp_ZO_31_50_60cm_116rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_117rule1_eval_expression(context) {
    // Scholachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Scholachtigen']  > 0);
    } else {
        return (feature['Scholachtigen']  > 0);
    }
}


function exp_ZO_31_4050cm_117rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_118rule1_eval_expression(context) {
    // Scholachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Scholachtigen']  > 0);
    } else {
        return (feature['Scholachtigen']  > 0);
    }
}


function exp_ZO_31_3040cm_118rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_119rule1_eval_expression(context) {
    // Scholachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Scholachtigen']  > 0);
    } else {
        return (feature['Scholachtigen']  > 0);
    }
}


function exp_ZO_31_2030cm_119rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_120rule1_eval_expression(context) {
    // Scholachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Scholachtigen']  > 0);
    } else {
        return (feature['Scholachtigen']  > 0);
    }
}


function exp_ZO_31_1020cm_120rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_121rule1_eval_expression(context) {
    // Scholachtigen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Scholachtigen']  > 0);
    } else {
        return (feature['Scholachtigen']  > 0);
    }
}


function exp_ZO_31_010cm_121rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_122rule1_eval_expression(context) {
    // Spiering > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Spiering']  > 0);
    } else {
        return (feature['Spiering']  > 0);
    }
}


function exp_ZO_31_7080cm_122rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_123rule1_eval_expression(context) {
    // Spiering > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Spiering']  > 0);
    } else {
        return (feature['Spiering']  > 0);
    }
}


function exp_ZO_31_6070cm_123rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_124rule1_eval_expression(context) {
    // Spiering > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Spiering']  > 0);
    } else {
        return (feature['Spiering']  > 0);
    }
}


function exp_ZO_31_50_60cm_124rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_125rule1_eval_expression(context) {
    // Spiering > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Spiering']  > 0);
    } else {
        return (feature['Spiering']  > 0);
    }
}


function exp_ZO_31_4050cm_125rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_126rule1_eval_expression(context) {
    // Spiering > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Spiering']  > 0);
    } else {
        return (feature['Spiering']  > 0);
    }
}


function exp_ZO_31_3040cm_126rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_127rule1_eval_expression(context) {
    // Spiering > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Spiering']  > 0);
    } else {
        return (feature['Spiering']  > 0);
    }
}


function exp_ZO_31_2030cm_127rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_128rule1_eval_expression(context) {
    // Spiering > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Spiering']  > 0);
    } else {
        return (feature['Spiering']  > 0);
    }
}


function exp_ZO_31_1020cm_128rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_129rule1_eval_expression(context) {
    // Spiering > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Spiering']  > 0);
    } else {
        return (feature['Spiering']  > 0);
    }
}


function exp_ZO_31_010cm_129rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_130rule1_eval_expression(context) {
    // Sprot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Sprot']  > 0);
    } else {
        return (feature['Sprot']  > 0);
    }
}


function exp_ZO_31_7080cm_130rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_131rule1_eval_expression(context) {
    // Sprot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Sprot']  > 0);
    } else {
        return (feature['Sprot']  > 0);
    }
}


function exp_ZO_31_6070cm_131rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_132rule1_eval_expression(context) {
    // Sprot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Sprot']  > 0);
    } else {
        return (feature['Sprot']  > 0);
    }
}


function exp_ZO_31_50_60cm_132rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_133rule1_eval_expression(context) {
    // Sprot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Sprot']  > 0);
    } else {
        return (feature['Sprot']  > 0);
    }
}


function exp_ZO_31_4050cm_133rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_134rule1_eval_expression(context) {
    // Sprot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Sprot']  > 0);
    } else {
        return (feature['Sprot']  > 0);
    }
}


function exp_ZO_31_3040cm_134rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_135rule1_eval_expression(context) {
    // Sprot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Sprot']  > 0);
    } else {
        return (feature['Sprot']  > 0);
    }
}


function exp_ZO_31_2030cm_135rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_136rule1_eval_expression(context) {
    // Sprot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Sprot']  > 0);
    } else {
        return (feature['Sprot']  > 0);
    }
}


function exp_ZO_31_1020cm_136rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_137rule1_eval_expression(context) {
    // Sprot > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Sprot']  > 0);
    } else {
        return (feature['Sprot']  > 0);
    }
}


function exp_ZO_31_010cm_137rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_138rule1_eval_expression(context) {
    // Stekelbaarsen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Stekelbaarsen']  > 0);
    } else {
        return (feature['Stekelbaarsen']  > 0);
    }
}


function exp_ZO_31_7080cm_138rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_139rule1_eval_expression(context) {
    // Stekelbaarsen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Stekelbaarsen']  > 0);
    } else {
        return (feature['Stekelbaarsen']  > 0);
    }
}


function exp_ZO_31_6070cm_139rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_140rule1_eval_expression(context) {
    // Stekelbaarsen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Stekelbaarsen']  > 0);
    } else {
        return (feature['Stekelbaarsen']  > 0);
    }
}


function exp_ZO_31_50_60cm_140rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_141rule1_eval_expression(context) {
    // Stekelbaarsen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Stekelbaarsen']  > 0);
    } else {
        return (feature['Stekelbaarsen']  > 0);
    }
}


function exp_ZO_31_4050cm_141rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_142rule1_eval_expression(context) {
    // Stekelbaarsen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Stekelbaarsen']  > 0);
    } else {
        return (feature['Stekelbaarsen']  > 0);
    }
}


function exp_ZO_31_3040cm_142rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_143rule1_eval_expression(context) {
    // Stekelbaarsen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Stekelbaarsen']  > 0);
    } else {
        return (feature['Stekelbaarsen']  > 0);
    }
}


function exp_ZO_31_2030cm_143rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_144rule1_eval_expression(context) {
    // Stekelbaarsen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Stekelbaarsen']  > 0);
    } else {
        return (feature['Stekelbaarsen']  > 0);
    }
}


function exp_ZO_31_1020cm_144rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_145rule1_eval_expression(context) {
    // Stekelbaarsen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Stekelbaarsen']  > 0);
    } else {
        return (feature['Stekelbaarsen']  > 0);
    }
}


function exp_ZO_31_010cm_145rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_146rule1_eval_expression(context) {
    // Tong > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Tong']  > 0);
    } else {
        return (feature['Tong']  > 0);
    }
}


function exp_ZO_31_7080cm_146rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_147rule1_eval_expression(context) {
    // Tong > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Tong']  > 0);
    } else {
        return (feature['Tong']  > 0);
    }
}


function exp_ZO_31_6070cm_147rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_148rule1_eval_expression(context) {
    // Tong > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Tong']  > 0);
    } else {
        return (feature['Tong']  > 0);
    }
}


function exp_ZO_31_50_60cm_148rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_149rule1_eval_expression(context) {
    // Tong > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Tong']  > 0);
    } else {
        return (feature['Tong']  > 0);
    }
}


function exp_ZO_31_4050cm_149rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_150rule1_eval_expression(context) {
    // Tong > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Tong']  > 0);
    } else {
        return (feature['Tong']  > 0);
    }
}


function exp_ZO_31_3040cm_150rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_151rule1_eval_expression(context) {
    // Tong > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Tong']  > 0);
    } else {
        return (feature['Tong']  > 0);
    }
}


function exp_ZO_31_2030cm_151rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_152rule1_eval_expression(context) {
    // Tong > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Tong']  > 0);
    } else {
        return (feature['Tong']  > 0);
    }
}


function exp_ZO_31_1020cm_152rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_153rule1_eval_expression(context) {
    // Tong > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Tong']  > 0);
    } else {
        return (feature['Tong']  > 0);
    }
}


function exp_ZO_31_010cm_153rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_154rule1_eval_expression(context) {
    // Vissen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Vissen']  > 0);
    } else {
        return (feature['Vissen']  > 0);
    }
}


function exp_ZO_31_7080cm_154rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_155rule1_eval_expression(context) {
    // Vissen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Vissen']  > 0);
    } else {
        return (feature['Vissen']  > 0);
    }
}


function exp_ZO_31_6070cm_155rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_156rule1_eval_expression(context) {
    // Vissen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Vissen']  > 0);
    } else {
        return (feature['Vissen']  > 0);
    }
}


function exp_ZO_31_50_60cm_156rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_157rule1_eval_expression(context) {
    // Vissen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Vissen']  > 0);
    } else {
        return (feature['Vissen']  > 0);
    }
}


function exp_ZO_31_4050cm_157rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_158rule1_eval_expression(context) {
    // Vissen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Vissen']  > 0);
    } else {
        return (feature['Vissen']  > 0);
    }
}


function exp_ZO_31_3040cm_158rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_159rule1_eval_expression(context) {
    // Vissen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Vissen']  > 0);
    } else {
        return (feature['Vissen']  > 0);
    }
}


function exp_ZO_31_2030cm_159rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_160rule1_eval_expression(context) {
    // Vissen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Vissen']  > 0);
    } else {
        return (feature['Vissen']  > 0);
    }
}


function exp_ZO_31_1020cm_160rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_161rule1_eval_expression(context) {
    // Vissen > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Vissen']  > 0);
    } else {
        return (feature['Vissen']  > 0);
    }
}


function exp_ZO_31_010cm_161rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_162rule1_eval_expression(context) {
    // Wijting > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Wijting']  > 0);
    } else {
        return (feature['Wijting']  > 0);
    }
}


function exp_ZO_31_7080cm_162rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_163rule1_eval_expression(context) {
    // Wijting > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Wijting']  > 0);
    } else {
        return (feature['Wijting']  > 0);
    }
}


function exp_ZO_31_6070cm_163rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_164rule1_eval_expression(context) {
    // Wijting > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Wijting']  > 0);
    } else {
        return (feature['Wijting']  > 0);
    }
}


function exp_ZO_31_50_60cm_164rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_165rule1_eval_expression(context) {
    // Wijting > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Wijting']  > 0);
    } else {
        return (feature['Wijting']  > 0);
    }
}


function exp_ZO_31_4050cm_165rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_166rule1_eval_expression(context) {
    // Wijting > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Wijting']  > 0);
    } else {
        return (feature['Wijting']  > 0);
    }
}


function exp_ZO_31_3040cm_166rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_167rule1_eval_expression(context) {
    // Wijting > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Wijting']  > 0);
    } else {
        return (feature['Wijting']  > 0);
    }
}


function exp_ZO_31_2030cm_167rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_168rule1_eval_expression(context) {
    // Wijting > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Wijting']  > 0);
    } else {
        return (feature['Wijting']  > 0);
    }
}


function exp_ZO_31_1020cm_168rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_169rule1_eval_expression(context) {
    // Wijting > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Wijting']  > 0);
    } else {
        return (feature['Wijting']  > 0);
    }
}


function exp_ZO_31_010cm_169rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_7080cm_170rule1_eval_expression(context) {
    // Baars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars']  > 0);
    } else {
        return (feature['Baars']  > 0);
    }
}


function exp_ZO_31_7080cm_170rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_6070cm_171rule1_eval_expression(context) {
    // Baars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars']  > 0);
    } else {
        return (feature['Baars']  > 0);
    }
}


function exp_ZO_31_6070cm_171rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_50_60cm_172rule1_eval_expression(context) {
    // Baars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars']  > 0);
    } else {
        return (feature['Baars']  > 0);
    }
}


function exp_ZO_31_50_60cm_172rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_4050cm_173rule1_eval_expression(context) {
    // Baars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars']  > 0);
    } else {
        return (feature['Baars']  > 0);
    }
}


function exp_ZO_31_4050cm_173rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_3040cm_174rule1_eval_expression(context) {
    // Baars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars']  > 0);
    } else {
        return (feature['Baars']  > 0);
    }
}


function exp_ZO_31_3040cm_174rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_2030cm_175rule1_eval_expression(context) {
    // Baars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars']  > 0);
    } else {
        return (feature['Baars']  > 0);
    }
}


function exp_ZO_31_2030cm_175rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_1020cm_176rule1_eval_expression(context) {
    // Baars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars']  > 0);
    } else {
        return (feature['Baars']  > 0);
    }
}


function exp_ZO_31_1020cm_176rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}


function exp_ZO_31_010cm_177rule1_eval_expression(context) {
    // Baars > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Baars']  > 0);
    } else {
        return (feature['Baars']  > 0);
    }
}


function exp_ZO_31_010cm_177rule2_eval_expression(context) {
    // sampled = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['sampled']  == 0);
    } else {
        return (feature['sampled']  == 0);
    }
}