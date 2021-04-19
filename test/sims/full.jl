using JultraDark
using Test
using MPI

resol = 16


output_dir = "output"
output_times = 0.0:0.002:0.01

output_config = OutputConfig(output_dir, output_times; box=false)
options = Config.SimulationConfig(10, t->1)

for grid_type in [Grids, PencilGrids]
    grids = grid_type(1.0, 16)
    grids.ψx .= grids.dist ./ 1e9 # Set ψx to something non-zero
    @test simulate(grids, options, output_config) == nothing
end
