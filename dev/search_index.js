var documenterSearchIndex = {"docs":
[{"location":"#JultraDark.jl-1","page":"Home","title":"JultraDark.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [JultraDark]","category":"page"},{"location":"#JultraDark.Grids","page":"Home","title":"JultraDark.Grids","text":"struct containing grids used in a simulation\n\nExamples\n\njulia> using JultraDark\n\njulia> len = 1;\n\njulia> resol = 16;\n\njulia> Grids(len, resol);\n\n\n\n\n\n\n","category":"type"},{"location":"#JultraDark.Grids-Tuple{Array{Complex{Float64},N} where N,Real}","page":"Home","title":"JultraDark.Grids","text":"Grids(ψx::Array{Complex{Float64}}, length::Real)\n\nConstructor for Grids\n\nCreate a grid with given ψ field, length length and resolution inferred from ψx\n\nExamples\n\nCan be contructed from a ψ field and box length,\n\njulia> using JultraDark\n\njulia> ψ = zeros(Complex{Float64}, 16, 16, 16);\n\njulia> len = 1;\n\njulia> Grids(ψ, len);\n\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.Grids-Tuple{Real,Integer}","page":"Home","title":"JultraDark.Grids","text":"Grids(length::Real, resol::Integer)\n\nConstructor for Grids\n\nCreate an empty grid with length length and resolution resol\n\nExamples\n\njulia> using JultraDark\n\njulia> Grids(1.0, 64);\n\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.PencilGrids","page":"Home","title":"JultraDark.PencilGrids","text":"struct containing grids used in a simulation\n\nExamples\n\njulia> using JultraDark\n\njulia> len = 1;\n\njulia> resol = 16;\n\njulia> PencilGrids(len, resol);\n\n\n\n\n\n\n","category":"type"},{"location":"#JultraDark.PencilGrids-Tuple{Array{Complex{Float64},N} where N,Real}","page":"Home","title":"JultraDark.PencilGrids","text":"PencilGrids(ψx::Array{Complex{Float64}}, length::Real)\n\nConstructor for PencilGrids\n\nCreate a grid with given ψ field, length length and resolution inferred from ψx\n\nExamples\n\nCan be contructed from a ψ field and box length,\n\njulia> using JultraDark\n\njulia> ψ = zeros(Complex{Float64}, 16, 16, 16);\n\njulia> len = 1;\n\njulia> PencilGrids(ψ, len);\n\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.PencilGrids-Tuple{Real,Integer}","page":"Home","title":"JultraDark.PencilGrids","text":"PencilGrids(length::Real, resol::Integer)\n\nConstructor for PencilGrids\n\nCreate an empty grid with length length and resolution resol.  Uses PencilFFTs to create PencilArrays.\n\nExamples\n\njulia> using JultraDark\n\njulia> PencilGrids(1.0, 64);\n\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.actual_time_step-Tuple{Any,Any,Any}","page":"Home","title":"JultraDark.actual_time_step","text":"actual_time_step(max_timestep::Real, time_interval::Real, n::Integer)\n\nActual size and number of time steps that should be taken if the maximum  is max_timestep, no more than n steps should be taken, and they should fit in time_interval.\n\nExamples\n\njulia> using JultraDark: actual_time_step\n\njulia> actual_time_step(0.11, 1, 20)\n(0.1, 10)\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.evolve_to!-Tuple{Any,Any,Any,Any,JultraDark.Config.SimulationConfig}","page":"Home","title":"JultraDark.evolve_to!","text":"Evolve grids forward from t_start to t_end\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.k_vec-Tuple{Any,Any}","page":"Home","title":"JultraDark.k_vec","text":"k_vec(lengths, resols)\n\nCalculate the Fourier frequencies of a box with side lengths lengths and resolutions resols\n\nExamples\n\njulia> using JultraDark: k_vec\n\njulia> kvec = k_vec((2π, 2π, 2π), (4, 4, 4));\n\njulia> kvec[1]\n4-element AbstractFFTs.Frequencies{Float64}:\n  0.0\n  1.0\n -2.0\n -1.0\n\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.max_normed_phase_grad-Tuple{Any}","page":"Home","title":"JultraDark.max_normed_phase_grad","text":"normed_max_phase_grad(grids)\n\nCompute maximum phase gradient of a grid\n\nNormalised to ignore large gradients in regions with low density.  These tend to be anomalous.\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.max_time_step-Tuple{Any,Any}","page":"Home","title":"JultraDark.max_time_step","text":"max_time_step(grids, a)\n\nCalculate an upper bound on the time step\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.output_grids-Tuple{Any,Any,Any}","page":"Home","title":"JultraDark.output_grids","text":"output_grids(grids, output_config, step)\n\nWrite output from grids as specified in output_config\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.output_summary_header-Tuple{Any}","page":"Home","title":"JultraDark.output_summary_header","text":"output_summary_header(output_config)\n\nWrite a header for a summary file\n\nThe header contains labels for each column of the summary CSV file. This function overwrites the current contents of the file.\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.output_summary_row-NTuple{5,Any}","page":"Home","title":"JultraDark.output_summary_row","text":"output_summary_row(grids, output_config, t, a, Δt)\n\nWrite a new row to the summary file\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.phase_diff-Tuple{Any,Any}","page":"Home","title":"JultraDark.phase_diff","text":"phase_diff(field, dir)\n\nCompute point-to-point difference of phase on a grid along a direction\n\nReturns an array of size (size(field)[1], size(field)[2], size(field)[2]) containing gradients in direction dir.\n\n\n\n\n\n","category":"method"},{"location":"#JultraDark.take_steps!-NTuple{6,Any}","page":"Home","title":"JultraDark.take_steps!","text":"Take n steps with time step Δt\n\nExamples\n\njulia> using JultraDark: take_steps!, Grids, OutputConfig\n\njulia> take_steps!(Grids(1.0, 16), 0, 0.5, 10, OutputConfig(mktempdir(), []), t->1)\n5.0\n\n\n\n\n\n\n","category":"method"}]
}
