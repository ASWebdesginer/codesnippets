<?php
function perfmatters_delay_js($delay_js)
{
    if (is_user_logged_in()) return false;

    $current_url = strtok($_SERVER["REQUEST_URI"], '?');
    $is_front_page = $current_url == '/';
    // echo ('current ' . $current_url);

    return $delay_js && (is_front_page() || $is_front_page);
}
add_filter('perfmatters_delay_js', 'perfmatters_delay_js');


//exclude remove css
add_filter('perfmatters_remove_unused_css', function ($boolean) {
    if (is_front_page()) {
        return true;
    } else
        return false;
    return $boolean;
});
