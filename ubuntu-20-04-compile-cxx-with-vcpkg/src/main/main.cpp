#include <boost/program_options.hpp>
#include <iostream>

using namespace boost::program_options;

int main(int argc, char **argv) {
  try {
    options_description desc("Allowed options");
    desc.add_options()("help", "produce help message")(
        "name", value<std::string>(), "say hello to this name");

    variables_map vm;
    store(parse_command_line(argc, argv, desc), vm);
    notify(vm);

    if (vm.count("help")) {
      std::cout << desc << "\n";
      return 1;
    }

    if (vm.count("name")) {
      std::cout << "Hello, " << vm["name"].as<std::string>() << "!\n";
    } else {
      std::cout << "Hello, World!\n";
    }
  } catch (const error &ex) {
    std::cerr << ex.what() << '\n';
  }
}
