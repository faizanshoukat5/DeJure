<#
Export SVG logo variants to PNG files at multiple sizes.

Usage:
  Open PowerShell, navigate to the workspace root, then:
    cd client\public\assets
    ..\..\scripts\export-logos.ps1

This script prefers ImageMagick (`magick`). If not found it will try Inkscape CLI (`inkscape`).
Install ImageMagick: https://imagemagick.org
Install Inkscape: https://inkscape.org
#>

Set-StrictMode -Version Latest

$worked = $false

function Run-Magick {
    param($svg, $out, $width)
    & magick -density 300 $svg -background none -resize ${width}x $out
}

function Run-Inkscape {
    param($svg, $out, $width)
    & inkscape $svg --export-type=png --export-filename=$out --export-width=$width
}

$sizes = @(
    @{name='@1x'; w=520},
    @{name='@2x'; w=1040},
    @{name='_mid@1x'; w=260},
    @{name='_small@1x'; w=130}
)

$variants = @('logo-option7-seal-A.svg','logo-option7-seal-B.svg','logo-option7-seal-C.svg','logo-option7-seal-D.svg')

Write-Host "Exporting logos from $(Get-Location)"

if (Get-Command magick -ErrorAction SilentlyContinue) {
    Write-Host "Using ImageMagick (magick) to export PNGs..."
    foreach ($v in $variants) {
        foreach ($s in $sizes) {
            $out = $v -replace '\.svg$','' + $s.name + '.png'
            Write-Host "magick -> $v -> $out (${s.w}px)"
            Run-Magick $v $out $s.w
        }
    }
    $worked = $true
} elseif (Get-Command inkscape -ErrorAction SilentlyContinue) {
    Write-Host "ImageMagick not found; using Inkscape CLI to export PNGs..."
    foreach ($v in $variants) {
        foreach ($s in $sizes) {
            $out = $v -replace '\.svg$','' + $s.name + '.png'
            Write-Host "inkscape -> $v -> $out (${s.w}px)"
            Run-Inkscape $v $out $s.w
        }
    }
    $worked = $true
} else {
    Write-Warning "Neither 'magick' (ImageMagick) nor 'inkscape' CLI found on PATH."
    Write-Host "Install ImageMagick or Inkscape and re-run this script. Example (PowerShell):"
    Write-Host "  choco install imagemagick" -ForegroundColor Yellow
    Write-Host "Or download installers: https://imagemagick.org and https://inkscape.org"
}

if ($worked) { Write-Host "Export complete. PNG files generated in $(Get-Location)." -ForegroundColor Green }
